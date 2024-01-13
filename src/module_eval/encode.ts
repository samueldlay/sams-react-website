import { assert } from "../utils/assert.ts";

function assertIsString(value: unknown): asserts value is string {
  const type = typeof value;
  assert(type === "string", `Expected "string", found "${type}"`);
}

export function encodeAsDataUrl(sourceText: string): Promise<string> {
  const { promise, resolve, reject } = Promise.withResolvers<string>();
  const reader = new FileReader();

  const toReadError = (cause: unknown): Error =>
    cause instanceof Error ? cause : new Error("Error reading file", { cause });

  const listenerCallbacks: Partial<
    Record<
      keyof FileReaderEventMap,
      Parameters<FileReader["addEventListener" | "removeEventListener"]>[1]
    >
  > = {
    load: () => {
      const { result } = reader;
      assertIsString(result);
      resolve(result);
    },
    error: () => reject(toReadError(reader.error)),
  };

  for (const [type, fn] of Object.entries(listenerCallbacks)) {
    reader.addEventListener(type, fn);
  }

  const signal = AbortSignal.timeout(1e3);

  signal.addEventListener("abort", () => {
    if (reader.readyState === reader.LOADING) {
      for (const [type, fn] of Object.entries(listenerCallbacks)) {
        reader.removeEventListener(type, fn);
      }
      reader.abort();
      reject(toReadError(signal.reason));
    }
  });

  reader.readAsDataURL(new Blob([sourceText], { type: "text/javascript" }));

  return promise;
}

// Or, synchronous and simple:
// export function encodeAsDataUrl(sourceText: string): string {
//   return `data:text/javascript;base64,${
//     new TextEncoder().encode(sourceText).toBase64()
//   }`;
// }

/**
 * Don't forget to revoke the URL after use (in order to reclaim the memory):
 * ```ts
 * declare const sourceText: string;
 * const encoded = encodeAsObjectUrl(sourceText);
 * // use the URL (encoded.url) … then afterward:
 * encoded.revoke();
 * ```
 */
export function encodeAsObjectUrl(sourceText: string): {
  revoke: () => void;
  url: string;
} {
  const url = URL.createObjectURL(
    new Blob([sourceText], { type: "text/javascript" }),
  );
  return { revoke: () => URL.revokeObjectURL(url), url };
}

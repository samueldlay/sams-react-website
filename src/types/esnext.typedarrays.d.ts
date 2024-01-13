type Base64Alphabet = "base64" | "base64url";

type Base64EncodingOptions = {
  alphabet?: Base64Alphabet;
};

interface Uint8Array {
  toBase64(options?: Base64EncodingOptions): string;
  toHex(): string;
}

type Base64DecodingOptions = {
  alphabet?: Base64Alphabet;
  strict?: boolean;
};

interface Uint8ArrayConstructor {
  fromBase64(input: string, options?: Base64DecodingOptions): Uint8Array;
  fromHex(input: string): Uint8Array;
}

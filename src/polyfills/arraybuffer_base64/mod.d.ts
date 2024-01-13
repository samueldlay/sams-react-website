export type Base64Alphabet = "base64" | "base64url";
export type Base64EncodingOptions = {
  alphabet?: Base64Alphabet;
};
export type Base64DecodingOptions = {
  alphabet?: Base64Alphabet;
  strict?: boolean;
};
export declare function checkUint8Array(
  arg: ArrayLike<number>,
): asserts arg is Uint8Array;
export declare function uint8ArrayToBase64(
  arr: ArrayLike<number>,
  options?: Base64EncodingOptions,
): string;
export declare function base64ToUint8Array(
  string: string,
  options?: Base64DecodingOptions,
): Uint8Array;
export declare function uint8ArrayToHex(arr: ArrayLike<number>): string;
export declare function hexToUint8Array(string: string): Uint8Array;

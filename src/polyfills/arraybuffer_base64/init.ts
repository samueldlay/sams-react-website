// import "core-js/proposals/array-buffer-base64";

// Adapted from https://github.com/tc39/proposal-arraybuffer-base64/blob/2be36d3c3b56f09989f6ab91a58f73c01bd4d1bf/playground/polyfill-install.mjs

import {
  base64ToUint8Array,
  hexToUint8Array,
  uint8ArrayToBase64,
  uint8ArrayToHex,
} from "./mod.js";

Uint8Array.prototype.toBase64 ??= function (options) {
  return uint8ArrayToBase64(this, options);
};

Uint8Array.fromBase64 ??= function (string, options) {
  return base64ToUint8Array(string, options);
};

Uint8Array.prototype.toHex ??= function () {
  return uint8ArrayToHex(this);
};

Uint8Array.fromHex ??= function (string) {
  return hexToUint8Array(string);
};

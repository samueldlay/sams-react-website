// https://github.com/microsoft/TypeScript/pull/56593/files#diff-912c466f94de7fa0b4cdbcd431088b9edc9309af36ddeb1a2cdeee097cedbe16

/* eslint-disable */

interface PromiseWithResolvers<T> {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
}

interface PromiseConstructor {
  /**
   * Creates a new Promise and returns it in an object, along with its resolve and reject functions.
   * @returns An object with the properties `promise`, `resolve`, and `reject`.
   *
   * ```ts
   * const { promise, resolve, reject } = Promise.withResolvers<T>();
   * ```
   */
  withResolvers<T>(): PromiseWithResolvers<T>;
}

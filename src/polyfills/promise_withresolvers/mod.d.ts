/* eslint-disable */

export type PromiseWithResolvers<T> = {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: any) => void;
};
export declare function withResolvers<T>(
  this: PromiseConstructor,
): PromiseWithResolvers<T>;

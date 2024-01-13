// https://github.com/tc39/proposal-promise-with-resolvers/blob/3a78801e073e99217dbeb2c43ba7212f3bdc8b83/polyfills.js

export function withResolvers() {
  if (!this) throw new TypeError("Promise.withResolvers called on non-object");
  const out = {};
  out.promise = new this((resolve_, reject_) => {
    out.resolve = resolve_;
    out.reject = reject_;
  });
  return out;
}

// import "core-js/proposals/promise-with-resolvers";

import { withResolvers } from "./mod.js";

Promise.withResolvers ??= withResolvers;

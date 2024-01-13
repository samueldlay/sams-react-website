# TODO

- Setup:
  - [x] [Tailwind](https://tailwindcss.com/docs/guides/vite)
  - [x] [React Router](https://reactrouter.com/en/main)
  - [x] [localForage](https://github.com/localForage/localForage)
  - [x] [Recoil](https://recoiljs.org/)

- Configure [Vite](https://vitejs.dev/), and the above

- Format code using [Deno](https://deno.com/)? [Biome](https://biomejs.dev/)?

- Testing:
  - [Vitest](https://vitest.dev/)?
  - [Storybook](https://storybook.js.org/)?

- Mention [Boop](https://github.com/IvanMathy/Boop) as inspiration in the README

- Research UX/features. See
  [Boop issues](https://github.com/IvanMathy/Boop/issues)

- More thoughts…
  - Support more than just ESM runtime code (e.g. TypeScript source) using
    [esbuild](https://esbuild.github.io/)?
  - Define module data and metadata exports. e.g.
    ```ts
    type TextTransformFn = (text: string) => string /* | Promise<string>? */;

    type TextTransformModule =
      & {
        fn: TextTransformFn;
        name: string;
      }
      & Partial<{
        description: string;
        icon: string;
      }>;
    ```
  - How to validate modules and cache module metadata (e.g. icon data, text
    metadata, etc.)? Validate in a worker and post back to host? Store "cache
    entries" with the result of the prior validation?
  - How to run each module? `import`ing modules in the host will accumulate in
    memory and they can have side-effects. Running in a worker might solve
    those…
  - How to handle module "IDs" for lookup/caching? Is it the responsibility of
    each module? How to ensure uniqueness?
  - Need to find or build a React/Recoil adapter for `localForage`
  - If the UI supports searching/filtering modules: what kind of algorithm to
    use? Variations on exact string match (e.g. case-insensitive) seems less
    useful than… an existing "fuzzy" (similar-but-not-exact) algorithm? Split on
    whitespace and match all parts? Other?

# Configure dev environment

Create a VS Code
[workspace settings](https://code.visualstudio.com/docs/getstarted/settings#_workspace-settings)
configuration file:

[`.vscode/settings.json`](.vscode/settings.json):

```jsonc
{
  /* Disable Deno's linter
  https://github.com/denoland/vscode_deno/issues/170
  https://github.com/denoland/vscode_deno/issues/816
  */
  "deno.enable": false,
  /* Use the Tailwind CSS extension (bradlc.vscode-tailwindcss) for CSS files
  https://stackoverflow.com/q/47607602/438273
  */
  "files.associations": {
    "*.css": "tailwindcss"
  }
}
```

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and
some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)
  uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the
configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to
  `plugin:@typescript-eslint/recommended-type-checked` or
  `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install
  [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and
  add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends`
  list

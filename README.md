# vite-plugin-jsdelivr

Import modules from JsDelivr with vite plugin.

#### INSTALL

```bash
ni -D vite-plugin-jsdelivr # @antfu/ni
```

#### USAGE

```ts
// vite.config.ts

import JsDelivr from 'vite-plugin-jsdelivr'

export default defineConfig({
    plugins: [
        JsDelivr(),
    ],
})
```

#### OPTIONS

[See `types`](./src/types.ts) (Welcome PR for [auto complete](./src/auto-complete.ts))
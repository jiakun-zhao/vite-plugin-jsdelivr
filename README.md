# vite-plugin-jsdelivr

A Vite plugin to use jsDelivr as CDN.

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
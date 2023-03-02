import { defineConfig } from 'vite'

import JsDelivr from 'vite-plugin-jsdelivr'

export default defineConfig({
    plugins: [
        JsDelivr(),
    ],
})

import { join } from 'node:path'
import { readFileSync } from 'node:fs'
import externalGlobals from 'rollup-plugin-external-globals'
import type { Plugin } from 'vite'
import type { Options } from './types'
import autoComplete from './auto'

const JSDELIVR_CDN_URL = 'https://cdn.jsdelivr.net/npm'

function readPackageJson(...paths: string[]) {
    const text = readFileSync(join(...paths), 'utf-8')
    return JSON.parse(text)
}

export default function JsDelivr(options: Options = {}): Plugin {
    const auto = options.auto ?? true
    const packages = options.packages ?? {}

    return {
        name: 'vite-plugin-jsdelivr',
        apply: 'build',
        config() {
            if (auto) {
                const { dependencies } = readPackageJson(process.cwd(), 'package.json')
                Object.keys(dependencies ?? {}).forEach((name) => {
                    if (Object.hasOwn(autoComplete, name) && !Object.hasOwn(packages, name))
                        packages[name] = autoComplete[name]
                })
            }

            const globals = Object.keys(packages).reduce((acc, name) => {
                const _var = packages[name].var
                if (_var)
                    acc[name] = _var
                return acc
            }, {} as Record<string, string>)

            return {
                build: {
                    rollupOptions: {
                        external: Object.keys(globals),
                        plugins: [externalGlobals(globals)],
                    },

                },
            }
        },

        transformIndexHtml: {
            order: 'post',
            handler() {
                // eslint-disable-next-line no-console
                console.log()
                return Object.entries(packages).map(([name, { var: _var, filePath }]) => {
                    const { version } = readPackageJson(process.cwd(), 'node_modules', name, 'package.json')
                    const _filePath = filePath
                        ? `${JSDELIVR_CDN_URL}/${name}@${version}/${filePath}`
                        : `${JSDELIVR_CDN_URL}/${name}@${version}`
                    // eslint-disable-next-line no-console
                    console.log(`\x1B[2mJsDelivr:\x1B[0m \x1B[${_var ? '36m' : '35m'}${_filePath}\x1B[0m`)
                    return _var
                        ? { tag: 'script', attrs: { src: _filePath } }
                        : { tag: 'link', attrs: { rel: 'stylesheet', href: _filePath } }
                })
            },
        },
    }
}

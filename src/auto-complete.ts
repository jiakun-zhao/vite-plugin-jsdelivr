import type { Package } from './types'

export default <Record<string, Package>> {

    // React

    'react': {
        var: 'React',
        filePath: 'umd/react.production.min.js',
    },
    'react-dom': {
        var: 'ReactDOM',
        filePath: 'umd/react-dom.production.min.js',
    },
    'react-router-dom': {
        var: 'ReactRouterDOM',
        filePath: 'umd/react-router-dom.min.js',
    },

    // Vue

    'vue': {
        var: 'Vue',
        filePath: 'dist/vue.runtime.global.prod.js',
    },
    'vue-router': {
        var: 'VueRouter',
        filePath: 'dist/vue-router.global.prod.js',
    },
    '@vueuse/shared': {
        var: 'VueUse',
        filePath: 'index.iife.min.js',
    },
    '@vueuse/core': {
        var: 'VueUse',
        filePath: 'index.iife.min.js',
    },

    // Other

    'moment': {
        var: 'moment',
        filePath: 'moment.min.js',
    },

    'axios': {
        var: 'axios',
        filePath: 'dist/axios.min.js',
    },
}

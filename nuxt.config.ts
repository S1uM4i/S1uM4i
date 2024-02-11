// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    experimental: {
        componentIslands: true,
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'S1uM4i - 三点几嘞，饮茶先',
        }
    },
    srcDir: 'src',
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    ssr: true,
    hooks: {
        'pages:extend'(pages) {
            // 添加一个路由
            pages.push({
                name: 'index',
                path: '/',
                file: '~/pages/Chronicle.vue'
            })
        }
    },
    css: [
        '/assets/css/main.css'
    ]
})

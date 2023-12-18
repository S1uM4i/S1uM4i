// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    srcDir: 'src',
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    ssr: false,
    hooks: {
        'pages:extend'(pages) {
            // 添加一个路由
            pages.push({
                name: 'index',
                path: '/',
                file: '~/pages/Chronicle.vue'
            })
        }
    }
})

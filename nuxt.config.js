const path = require('path');

module.exports = {
  mode: 'universal',
  redis: {
    host: '172.30.3.206',
    port: 6379
  },
  /*
** Headers of the page
*/
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  serverMiddleware: [
    '~/server/cache.js'
  ],
  /*
** Customize the progress-bar color
*/
  loading: { color: '#fff' },
  /*
** Global CSS
*/
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
** Plugins to load before mounting the App
*/
  plugins: [
    // { src: '@/plugins/element-ui', ssr: false }
    // '~/plugins/axios'
  ],
  /*
** Nuxt.js modules
*/
  modules: [
    ['@nuxtjs/axios', { baseURL: 'http://localhost:3000' }],
  ],
  /*
  ** Build configuration
  */
  build: {
    // extractCSS: { allChunks: true },
    babel: {        //配置按需引入规则
      "plugins": [
        [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ]
      ]
    },
    transpile: [/^element-ui/],
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      config.externals = {
        'path': 'path',
        'fs': 'fs'
      }
    }
  }
}

const path = require('path');

const pkg = require('./package');

module.exports = {
    mode: 'universal',

    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [{
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: pkg.description
            }
        ],
        link: [{
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico'
        }]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#fff'
    },

    /*
     ** Global CSS
     */
    css: [
        "styles/common.scss"
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [],

    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        // Doc: https://bootstrap-vue.js.org/docs/
        'bootstrap-vue/nuxt',
        '@nuxtjs/pwa',
    ],
    /*
     ** Axios module configuration
     */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            config.resolve.alias['components'] = path.join(process.cwd(), 'components');
            config.resolve.alias['styles'] = path.join(process.cwd(), 'styles');
            config.resolve.alias['server'] = path.join(process.cwd(), 'server');
            config.resolve.alias['helper'] = path.join(process.cwd(), 'helper');
            config.resolve.alias['store'] = path.join(process.cwd(), 'store');

            config.module.rules.push({
                test: /\.(scss|sass)$/,
                use: [{
                    loader: 'sass-resources-loader',
                    options: {
                        resources: [
                            path.join(process.cwd(), '/styles/helper/vars.scss'),
                            path.join(process.cwd(), '/styles/helper/functions/functions.scss'),
                            path.join(process.cwd(), '/styles/helper/mixins/mixins.scss')
                        ]
                    },
                }],
            })
        }
    }
}
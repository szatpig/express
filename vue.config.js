// Created by szatpig at 2018/11/26.

const externals = {
    // 'element-ui':'ELEMENT'
    'vue':'Vue',
    'vue-router':'VueRouter',
    'vuex':'Vuex',
    'axios':'axios'
}

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
    ? '/express/'
    : '/',
    outputDir:'docs',
    productionSourceMap: false,
    chainWebpack: config => {
        config.module
            .rule('css')
            .test(/\.css$/)
            .oneOf('vue')
            .resourceQuery(/\?vue/)
            .use('px2rem')
            .loader('px2rem-loader')
            .options({
                remUnit: 75
            });
        config.externals(externals);
    },

    devServer: {
        host: '0.0.0.0',
        port: 3333,
        https: false,
        hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {
            // '/api': {
            //     target: '<url>',
            //     ws: true,
            //     changeOrigin: true
            // },
            '/api': {
                target: 'http://192.168.88.23:7304/outplan',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/common': {
                target: 'http://10.99.1.133:12222',
                changeOrigin: true,
                pathRewrite: {
                    '^/common': ''
                }
            }
        }, // string | Object
        before: app => {}
    },

}




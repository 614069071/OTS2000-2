const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://192.168.20.109:8080/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false
      }
    }
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@lib', resolve('src/lib'))
      .set('@utils', resolve('src/utils'))
      .set('@store', resolve('src/store'))
      .set('@views', resolve('src/views'))
      .set('@assets', resolve('src/assets'))
      .set('@router', resolve('src/router'))
      .set('@components', resolve('src/components'))
  },
  configureWebpack: config => { // eslint-disable-line
    if (process.env.NODE_ENV === 'production') {
      return {
        optimization: {
          minimizer: [
            new TerserPlugin({
              sourceMap: false,
              terserOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
        }
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/_var.scss";`
      },
    }
  }
}
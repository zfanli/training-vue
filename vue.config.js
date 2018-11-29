// config for vue.js
module.exports = {
  devServer: {
    port: 4000,
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js'
      }
    }
  }
}
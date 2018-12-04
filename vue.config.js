// config for vue.js
module.exports = {
  devServer: {
    port: 4000,
  },
  outputDir: 'docs',
  baseUrl: './',
  chainWebpack: config => {
    config.module
      .rule('md-raw')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end()
  },
}

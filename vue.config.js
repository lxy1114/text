module.exports = {
  devServer: {
    port: '8082',
    proxy: {
      '/api': {},
      target: '',
      ws: true,
      changeOrigin: true,
      pathRewrite: {
        '^api': ''
      }
    }
  },
  publicPath: './'
}

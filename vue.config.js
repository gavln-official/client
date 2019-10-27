module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://dev.gavln.com',
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '/mock'
        // }
      }
    }
  }
}

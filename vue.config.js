module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:2021',
          changeOrigin: true
        },
      }
    }
  }
export default {
  ssr: true, // or false if you want only the API

  nitro: {
    preset: 'node-server',
    serveStatic: false,
  },

  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
}

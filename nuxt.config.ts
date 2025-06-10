export default {
  ssr: true, // or false if you want only the API

  nitro: {
    preset: 'node-server',
    serveStatic: false,
    routeRules: {
      '/api/**': {
        cors: true,  // Enable CORS on all /api routes
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
}

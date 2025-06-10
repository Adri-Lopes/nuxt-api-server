export default {
  ssr: true, // or false if you want only the API

  nitro: {
    preset: 'node-server',
    serveStatic: false,
    routeRules: {
      '/api/**': {
        cors: {
          origin: [
            'http://localhost:3000',      // Your local development URL
            'https://prontuario-medguias.meuprojetoweb.com.br'  // Your production URL
          ],
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
          credentials: true,
          maxAge: 86400
        }
      },
    },
  },

  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
}

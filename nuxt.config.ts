export default {
  ssr: true,

  nitro: {
    preset: 'vercel', 

    routeRules: {
      '/api/**': {
        cors: {
          origin: [
            'http://localhost:3000', 
            'https://prontuario-medguias.meuprojetoweb.com.br'
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

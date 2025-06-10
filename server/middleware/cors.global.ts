import { defineEventHandler, getHeader, getMethod, setResponseHeaders } from 'h3'

const allowedOrigins = [
  'http://localhost:3000',
  'https://prontuario-medguias.meuprojetoweb.com.br'
]

export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin')

  if (origin && allowedOrigins.includes(origin)) {
    setResponseHeaders(event, {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Max-Age': '86400'
    })
  }

  if (getMethod(event) === 'OPTIONS') {
    event.node.res.statusCode = 204
    event.node.res.end()
    return
  }
})

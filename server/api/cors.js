export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin') || '*'

  setHeader(event, 'Access-Control-Allow-Origin', origin)
  setHeader(event, 'Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  setHeader(event, 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')

  // Handle preflight
  if (event.method === 'OPTIONS') {
    event.node.res.statusCode = 204
    event.node.res.end()
  }
})
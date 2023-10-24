import http from 'node:http'

const server = http.createServer((req, res) => {
  const { method, url } = req

  if (method === 'GET' && url === '/hello') {
    return res.end('hello, friend!')
  }

  if (method === 'POST' && url === '/goodbye') {
    return res.end('goodbye, friend')
  }

  return res.end('teste 1')
})

server.listen(3333)
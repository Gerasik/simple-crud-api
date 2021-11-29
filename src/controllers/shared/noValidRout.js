module.exports = (request, response, error) => {
  response.writeHead(404, { "Content-Type": "application/json" })
  response.end(`Introduced non-existent route ${request.url}. ${error}`)
}

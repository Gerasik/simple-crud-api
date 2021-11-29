module.exports = (request, response) => {
  response.setHeader("Content-Type", "application/json")
  response.writeHead(200, { "Content-Type": "application/json" })
  response.end(JSON.stringify(request.person))
}

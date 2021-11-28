module.exports = (request, response) => {
  response.writeHead(500, { "Content-Type": "application/json" })
  response.end("Something went wrong")
}

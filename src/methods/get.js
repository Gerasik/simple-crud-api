module.exports = (request, response) => {
  switch (request.url) {
    case "/person":
      response.statusCode = 200
      response.setHeader("Content-Type", "application/json")
      response.write(JSON.stringify(request.person))
      response.end()
      break

    // response for unexpected get requests
    default:
      response.statusCode = 400
      response.write(`CANNOT GET ${request.url}`)
      response.end()
  }
}

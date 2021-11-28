require("url")
const http = require("http")

const { person } = require("./data")
const { getMethod, postMethod, putMethod, deleteMethod } = require("./methods")

const PORT = process.env.PORT || 4000

const server = http.createServer((request, response) => {
  request.person = person
  request.query = new URL(request.url, `http://${request.headers.host}`)
  console.log(request.query)

  switch (request.method) {
    case "GET":
      getMethod(request, response)
      break

    case "POST":
      postMethod(request, response)
      break

    case "PUT":
      putMethod(request, response)
      break

    case "DELETE":
      deleteMethod(request, response)
      break

    default:
      response.statusCode = 400
      response.write("No Response")
      response.end()
  }
})

server.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})

require("dotenv").config()
const http = require("http")

const { person } = require("./data")
const { shared } = require("./controllers")
const { getMethod, postMethod, putMethod, deleteMethod } = require("./methods")

const PORT = process.env.PORT || 4000

const server = http.createServer((request, response) => {
  request.person = person

  try {
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
        response.writeHead(400, { "Content-Type": "application/json" })
        response.end("No Response")
    }
  } catch (error) {
    shared.error(request, response)
  }
})

server.listen(PORT, (err) => {
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})

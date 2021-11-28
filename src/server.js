// Import http library
const http = require("http")
// use env variable to define port with default
const PORT = process.env.PORT || 4000

// Import our routers
const { getMethod, postMethod, putMethod, deleteMethod } = require("./methods")
// add an extra R since delete is a reserved word
const deleteR = require("./delete")

//create our server object, pass server function as callback argument
const server = http.createServer((request, response) => {
  // handle request based on method then URL
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
      // Send response for requests with no other response
      response.statusCode = 400
      response.write("No Response")
      response.end()
  }
})

// get the server to start listening
server.listen(PORT, (err) => {
  // error checking
  err ? console.error(err) : console.log(`listening on port ${PORT}`)
})

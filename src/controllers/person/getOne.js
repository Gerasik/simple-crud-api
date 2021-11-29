const { validate: uuidValidate } = require("uuid")

module.exports = (request, response) => {
  const id = request.url.split("/").pop()

  if (uuidValidate(id)) {
    const user = request.person.find((item) => item.id === id)

    if (user) {
      response.writeHead(200, { "Content-Type": "application/json" })
      response.end(JSON.stringify(user))
    } else {
      response.writeHead(404, { "Content-Type": "application/json" })
      response.end(`User with id:${id} not found`)
    }
  } else {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Id is not valid")
  }
}

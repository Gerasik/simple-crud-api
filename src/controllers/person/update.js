const { validate: uuidValidate } = require("uuid")

module.exports = (request, response) => {
  const id = request.url.split("/").pop()

  if (uuidValidate(id)) {
    const index = request.person.findIndex((item) => item.id === id)

    if (index > -1) {
      if (request.body.hasOwnProperty("id")) {
        response.writeHead(400, { "Content-Type": "application/json" })
        response.end("The body must not contain any ID")
      } else if (
        request.body.hasOwnProperty("name") &&
        typeof request.body.name !== "string"
      ) {
        response.writeHead(400, { "Content-Type": "application/json" })
        response.end("Option 'name' should be string ")
      } else if (
        request.body.hasOwnProperty("age") &&
        typeof request.body.age !== "number"
      ) {
        response.writeHead(400, { "Content-Type": "application/json" })
        response.end("Option 'age' should be number ")
      } else if (
        (request.body.hasOwnProperty("hobbies") &&
          typeof request.body.hobbies !== "object") ||
        (request.body.hobbies.length > 0 &&
          !request.body.hobbies.every((item) => typeof item === "string"))
      ) {
        response.writeHead(400, { "Content-Type": "application/json" })
        response.end(
          "Option 'hobbies' should be array of strings or empty array "
        )
      } else {
        request.person[index] = { ...request.person[index], ...request.body }
        response.writeHead(200, {
          "Content-Type": "application/json",
        })
        response.end(JSON.stringify(request.person[index]))
      }
    } else {
      response.writeHead(404, { "Content-Type": "application/json" })
      response.end(`User with id:${id} not found`)
    }
  } else {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Id is not valid")
  }
}

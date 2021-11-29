const { v4: uuidV4 } = require("uuid")

module.exports = (request, response) => {
  if (!request.body.hasOwnProperty("name")) {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Option 'name' is required ")
  } else if (!request.body.hasOwnProperty("age")) {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Option 'age' is required ")
  } else if (!request.body.hasOwnProperty("hobbies")) {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Option 'hobbies' is required ")
  } else if (typeof request.body.name !== "string") {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Option 'name' should be string ")
  } else if (typeof request.body.age !== "number") {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Option 'age' should be number ")
  } else if (
    typeof request.body.hobbies !== "object" ||
    (request.body.hobbies.length > 0 &&
      !request.body.hobbies.every((item) => typeof item === "string"))
  ) {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Option 'hobbies' should be array of strings or empty array ")
  } else {
    const newUser = {
      ...request.body,
      id: uuidV4(),
    }

    request.person.push(newUser)
    response.writeHead(201, { "Content-Type": "application/json" })
    response.end(JSON.stringify(newUser))
  }
}

const { validate: uuidValidate } = require("uuid")
const { forEach } = require("../../data/person")

module.exports = (request, response) => {
  const id = request.url.split("/").pop()

  if (uuidValidate(id)) {
    const index = request.person.findIndex((item) => item.id === id)

    if (index > -1) {
      let isPerson = false
      let other = []
      while (!isPerson) {
        const per = request.person.pop()
        if (per.id === id) {
          isPerson = true
        } else {
          other.push(per)
        }
      }
      other.forEach((i) => request.person.push(i))

      response.writeHead(204, {
        "Content-Type": "application/json",
      })
      response.end()
    } else {
      response.writeHead(404, { "Content-Type": "application/json" })
      response.end(`User with id:${id} not found`)
    }
  } else {
    response.writeHead(400, { "Content-Type": "application/json" })
    response.end("Id is not valid")
  }
}

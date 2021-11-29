const { person, shared } = require("../controllers")

module.exports = (request, response) => {
  if (request.url === "/person") {
    person.create(request, response)
  } else {
    shared.noValidRoute(request, response)
  }
}

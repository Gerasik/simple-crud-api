const { person, shared } = require("../controllers")

module.exports = (request, response) => {
  if (request.url === "/person") {
    person.getAll(request, response)
  } else if (/\/person\/[0-9a-z\-]+/g.test(request.url)) {
    person.getOne(request, response)
  } else {
    shared.noValidRoute(request, response)
  }
}

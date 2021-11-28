const { person, shared } = require("../controllers")

module.exports = (request, response) => {
  if (/\/person\/[0-9a-z\-]+/g.test(request.url)) {
    person.update(request, response)
  } else {
    shared.noValidRoute(request, response)
  }
}

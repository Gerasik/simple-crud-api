const getAll = require("./getAll")
const getOne = require("./getOne")
const create = require("./create")
const update = require("./update")
const getBody = require("./getBody")

module.exports = {
  getAll,
  getOne,
  create: (req, res) => getBody(req, res, create),
  update: (req, res) => getBody(req, res, update),
}

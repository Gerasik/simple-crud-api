require("dotenv").config()
const supertest = require("supertest")

const PORT = process.env.PORT || 4000

const server = supertest("http://localhost:3000")

let newUserID
describe("Test 1", function () {
  it("get all users", function (done) {
    server.get("/person").expect("Content-Type", /json/).expect(200, done)
  })

  it("create user", function (done) {
    server
      .post("/person")
      .send({
        name: "Yauheni",
        age: 30,
        hobbies: ["football", "guitar"],
      })
      .expect(function (res) {
        newUserID === res.body.id
      })
      .set("Accept", "application/json")
      .expect(201, done)
  })

  it("get user", function (done) {
    server
      .get(`/person/89f160e8-14b3-4616-bd1d-432b7760fb31`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done)
  })

  it("remove user", function (done) {
    server
      .delete(`/person/89f160e8-14b3-4616-bd1d-432b7760fb31`)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(204, done)
  })

  it("remove user shoud get error", function (done) {
    server
      .delete(`/person/89f160e8-14b3-4616-bd1d-432b7760fb31`)
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(404)
        done()
      })
  })
})

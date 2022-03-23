const request = require("supertest");
const app = require('../mockedApi/index.js');

describe("GET /", () => {
  describe("Should Respond with Message Backend API", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).get("/")
      expect(response.statusCode).toBe(200)
      expect(response.text).toBe("Backend API")
    })
  })
});
describe("POST /user", () => {
  describe("when passed all needed info and account is not existing", () => {
    test("Should respond with Account Created", async () => {
      const response = await request(app).post("/user").send({
        username: "batman",
        name: "testaccount",
        password: "testpassword",
        favouriteFruit: "mango",
        favouriteMovie: "batman",
        favouriteNumber: "23"
      })
      expect(response.text).toBe("Account Created")
    })
  })
})
describe("POST /user", () => {
  describe("when passed all needed info and account is existing", () => {
    test("should respond with Account Already Exists", async () => {
      const response = await request(app).post("/user").send({
        username: "dummytree",
        name: "testaccount",
        password: "testpassword",
        favouriteFruit: "mango",
        favouriteMovie: "batman",
        favouriteNumber: "23"
      })
      expect(response.text).toBe("Account Already Exists")
    })
  })
})
describe("PUT /user", () => {
  describe("Update Existing Account", () => {
    test("should respond with Account Updated", async () => {
      const response = await request(app).put("/user").send({
        username: "dummytree",
        name: "testaccount",
        password: "testpassword",
        favouriteFruit: "mango",
        favouriteMovie: "batman",
        favouriteNumber: "23"
      })
      expect(response.text).toBe("Account Updated")
    })
  })
})
describe("PUT /user", () => {
  describe("Update Not Existing Account", () => {
    test("should respond with Account Does NOT Exist", async () => {
      const response = await request(app).put("/user").send({
        username: "test1",
        name: "testaccount",
        password: "testpassword",
        favouriteFruit: "mango",
        favouriteMovie: "batman",
        favouriteNumber: "23"
      })
      expect(response.text).toBe("Account Does NOT Exist")
    })
  })
})
describe("DELETE /user", () => {
  describe("Should delete if account is existing", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).delete("/user").send({
        username: "batman",
      })
      expect(response.statusCode).toBe(200)
      expect(response.text).toBe("Account Deleted")
    })
  })
})
describe("DELETE /user", () => {
  describe("Should Respond with Account does not exist if username does not exist", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).delete("/user").send({
        username: "batman",
      })
      expect(response.statusCode).toBe(200)
      expect(response.text).toBe("Account Does Not Exist")
    })
  })
})
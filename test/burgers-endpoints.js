const knex = require("knex");
const supertest = require("supertest");
const app = require("../src/app");
const { expect } = require("chai");
const helpers = require("./test-helper");
const { makeBurgersArray } = require("./fixtures");

describe("Burger endpoint", function () {
  let db;

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destory());

  before("clean the table", () =>
    db.raw("TRUNCATE bobsburgers_burgers RESTART IDENTITY CASCADE")
  );

  afterEach("cleanup", () =>
    db.raw("TRUNCATE bobsburgers_burgers RESTART IDENTITY CASCADE")
  );

  describe(`GET /api/burgers`, () => {
    context(`Given no contacts`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app).get("/api/burgers").expect(200, []);
      });
    });

    context(`Given there are burgers in the database`, () => {
      const testBurgers = makeBurgersArray();

      beforeEach("insert burger", () => {
        return db
          .into("bobsburgers_burgers")
          .insert(testBurgers)
          .then(() => {
            return db.into("bobsburgers_burgers").insert(testBurgers);
          });
      });

      it(`responds with 200 and all the burgers`, () => {
        return supertest(app).get("/api/burgers").expect(200, testBurgers);
      });
    });
  });
});

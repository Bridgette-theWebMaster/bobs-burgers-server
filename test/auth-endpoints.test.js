const knex = require('knex')
const supertest = require('supertest')
const app = require('../src/app')
const {expect} = require('chai')
const helpers = require('./test-helper')

describe('Auth Endpoints', function() {
    let db

    const testUsers = helpers.userArr
    const testUser = testUsers[0]

    before('knex instance', () => {
        db = knex({
            client:'pg',
            connection: process.env.TEST_DATABASE_URL
        })
        app.set('db', db)
    })

    after('destory db', () => db.destory())

    beforeEach('cleanup', () => helpers.cleanTable(db))
    afterEach('cleanup', () => helpers.cleanTable(db))

    describe(`POST /auth/login`, ()=> {
        beforeEach('insert users', () => {
            return db
                .insert(testUsers)
                .into('users')
        })
        it(`Given valid login credentials, respond with 200`, () => {
            const login = {
                "email": "Bob@bobsburgers.com",
                "password": "Burgerz"
            }

            return supertest(app)
                .post('/auth/login')
                .send(login)
                .expect(200)
        })
    })
})
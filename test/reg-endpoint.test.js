const knex = require('knex')
const app = require('../src/app')
const helpers = require('./test-helper')
const {expect} = require('chai')
const supertest = require('supertest')

describe('Register Endpoints', () => {
    let db

    before('knex instance', () => {
        db = knex({
            client:'pg',
            connection: process.env.TEST_DATABASE_URL
        })
        app.set('db', db)
    })

    after('destroy db', ()=> db.destroy())

    beforeEach('cleanup', () => helpers.cleanTable(db))

    afterEach('cleanup', () => helpers.cleanTable(db))

    describe(`POST /auth/register`, () => {
        it('Given an email and hashed password, respond with 201', ()=> {
            const user = {
                name: 'Linda',
                email: 'Linda@bobsburgers.com',
                password: '$2b$10$1wrgb118.ic1ZC.O3.ocpeOaVbaT44hIszpgAB5Ol9fUi1g9P0q5.'
            }

            return supertest(app)
                .post(`/auth/register`)
                .send(user)
                .expect(201)
        })
    })
})
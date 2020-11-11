process.env.NODE_ENV = 'test'
process.send.jwtSecret = 'jwtSecret'

require('dotenv').config()
const {expect} = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest
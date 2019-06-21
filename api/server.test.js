const server = require('./server.js');
const supertest = require('supertest');
const db = require('../data/dbConfig.js');


describe('server', () => {

    afterAll(async() => {
        await db('users').truncate();
    })

    it('respond with 201 - post - add user', done => {
        supertest(server)
            .post('/')
            .send({username: 'test1234', password: '1234'})
            .expect(201)
            .expect('Content-Type', /json/i, done)
        }) 
    it('responds with 200 OK - get - root', () => {
        return supertest(server)
        .get('/')
        .expect(200)
    })

    it('respond with 200 - delete - remove user', () => {
        supertest(server)
        .delete('/1')
        .expect(200)
    })
})

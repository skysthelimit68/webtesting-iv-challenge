const db = require('../data/dbConfig.js');
const {insert, update, remove, getAll, findById} = require('./usersModel.js');

describe('test database', () => {
    beforeEach(async() => {
        await db('users').truncate();
    })


    it('should set environment to testing', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe('insert()', () => {
        it('should insert the user', async () => {
            await insert({ username: 'test1', password:"1234" })
            await insert({ username: "test2", password:"1234" })
            const users = await db('users');
            expect(users).toHaveLength(2); 
        })
        it('should have the right user', async () => {
            let user = {username: "test3", password:"1234"}
            let inserted = await insert(user)

            expect(inserted.name).toBe(user.name);
        })
    })
    
    describe('remove()', () => {
        it('should remove the user with id', async() => {
            const user = await insert({username: "test5", password:"1234"})
            let allUsers = await getAll();
            expect(allUsers.length).toBe(1);
            await remove(1);
            allUsers = await getAll();
            expect(allUsers.length).toBe(0)
        })
    })

    describe('getAll()', () => {
        it('should return the correct number of users from the database', async() => {
            await insert({username: "test5", password:"1234"})
            await insert({username: "test6", password:"1234"})
            const users = await getAll();
            expect(users.length).toBe(2);
        })
    })
})
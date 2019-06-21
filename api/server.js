const express = require('express');

const bcrypt = require('bcryptjs');

const Users = require('./usersModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'working' });
});

server.get('/users', (req, res) => {
  Users.getAll()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

server.post('/', (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash
    Users.insert(user)
    .then(user => {
        res.status(201).json(user)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(response => {
        res.status(200).json({message: `${resopnse} record deleted`})
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.put('/:id', (req, res) => {
    const changes = req.body
    Users.update(req.params.id, changes)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})



module.exports = server;

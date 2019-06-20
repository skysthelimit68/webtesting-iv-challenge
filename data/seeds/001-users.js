
const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'Hannah', password: bcrypt.hashSync("1234", 8)},
        {username: 'Connor', password: bcrypt.hashSync("1234", 8)},
        {username: 'Tiffany', password: bcrypt.hashSync("1234", 8)},
        {username: 'Oscar', password: bcrypt.hashSync("1234", 8)},
        {username: 'Candy', password: bcrypt.hashSync("1234", 8)},
        {username: 'Riley', password: bcrypt.hashSync("1234", 8)},
        {username: 'Colby', password: bcrypt.hashSync("1234", 8)},
        {username: 'Coco', password: bcrypt.hashSync("1234", 8)},

      ]);
    });
};



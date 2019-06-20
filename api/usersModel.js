const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

function insert(user) {
  return db('users')
  .insert(user, 'id')
  .then(ids => {
    return db('users')
      .where( { id: ids[0] })
      .first();
  });
}

async function update(id, changes) {
  return db('users')
  .where({ id })
  .update( changes )
  .then( count => {
      if(count > 0) {
          return findById(id)
      } else {
          return null;
      }
  })
}

function remove(id) {
  return db('users')
  .where({ id })
  .del()
}

function getAll() {
  return db('users');
}

function findById(id) {
  return db('users')
  .where({ id })
  .first()
}

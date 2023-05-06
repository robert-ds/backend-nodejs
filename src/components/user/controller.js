const store = require('./store');

const addUser = (name) => {

  if(!name){
    return Promise.reject();
  }

  const user = {
    name,
  }

  return store.add(user);
}

const listUsers = () => {
  return store.list();
}

module.exports = {
  addUser,
  listUsers
};
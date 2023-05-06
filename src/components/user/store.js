const Model = require('./model');

const addUser = (user) => {
  const newUser = new Model(user);
  return newUser.save();
}

const listUsers = () => {
  return Model.find();
}

module.exports = {
  add: addUser,
  list: listUsers
}
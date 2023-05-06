const Model = require('./model');

const addChats = (chat) => {
  const newChat = new Model(chat);
  return newChat.save();
}

const listChats = (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if(userId) {
      filter = {
        users: userId
      }
    }

    Model.find(filter)
      .populate('users')
      .exec((err, populated) => {
        if(err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChats,
  list: listChats
}
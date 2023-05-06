const Model = require('./model');

const addMessage = (message) => {
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {

  return new Promise((resolve, reject) => {
    
    let filter = {};
  
    if(filterUser !== null){
      filter = { user: filterUser };
    }
  
    const messages = Model.find(filter)
      .populate('user')
      .exec((error, populated) => {
        if(error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });

  });
};

const updateText = async (id, message) => {

  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message =  message;
  const newMessage = foundMessage.save(); 
  return newMessage;
};

const removeMessage = (id) => {
  return Model.deleteOne({
    _id: id
  });
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
}
const store = require('./store');

const addMessage = (user, message) => {

  return new Promise((resolve,reject) => {
    if(!user || !message) {
      console.error('[messageController] No hay usuario o mensaje');
      return reject('Los datos son incorrectos');
      return false;
    }

    const fullMessage = {
      user: user,
      message: message,
      date: new Date(),
    }
    
    store.add(fullMessage);

    resolve(fullMessage);
  });

};

const updateMessage = (id, message) => {
  return new Promise( async (resolve, reject) => {
    
    if(!id || !message) {
      reject("Invalid Data");
      return false;
    }

    const result = await store.updateText(id, message);
    resolve(result);
  });
}

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const deleteMessage = (id) => {
  return new Promise((resolve, reject) => {

    if(!id)  {
      reject('Invalid Id');
      return false;
    }

    store.remove(id)
    .then(() => {
      resolve();
    })
      .catch(e => {
        reject(e);
      });

  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
const db = require('mongoose');

db.Promise = global.Promise;
const connect = async () => {

  const credentials = 'mongodb+srv://robert:chocolate@movieapicluster.ozxtocz.mongodb.net/appmessagesdb?retryWrites=true&w=majority';

  await db.connect(credentials, {
    useNewUrlParser: true,
  });

  console.log('DB Connected Successfully');
  
}

module.exports = connect;
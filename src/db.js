const db = require('mongoose');
const config = require('./config');

db.Promise = global.Promise;
const connect = async () => {

  await db.connect(config.url, {
    useNewUrlParser: true,
  });

  console.log('DB Connected Successfully');
  
}

module.exports = connect;
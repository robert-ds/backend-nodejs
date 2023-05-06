const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    require: true,
  },
  date: Date
});

const model = mongoose.model('messages', mySchema);

module.exports = model;
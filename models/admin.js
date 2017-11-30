const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
  username: {
    type: String,
    unique: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true
  },
  password: String
});

const ModelClass = mongoose.model('admin', adminSchema);

module.exports = ModelClass;

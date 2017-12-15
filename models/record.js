const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  declarant: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: String,
  description: String,
  resourceType: String,
  files: [{
    name: String,
    description: String,
    thumbnail: String
  }]
});

const ModelClass = mongoose.model('record', recordSchema);

module.exports = ModelClass;

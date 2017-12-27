const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema({
  declarant: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  title: String,
  description: String,
  destination: String,
  resourceType: String,
  keywords: [String],
  files: [{
    name: String,
    description: String,
    thumbnail: String
  }],
  status: String,
  date: {type: Date, default: Date.now}
});

recordSchema.statics.getPreviewsOfUserRecords = function(userId) {
  return this.find({declarant: userId})
            .populate('declarant', '-_id firstName lastName')
            .select('title resourceType keywords');
};

recordSchema.statics.getRecord = function(recordId) {
  return this.findOne({_id: recordId})
    .populate('declarant', '-_id firstName lastName')
    .select('-__v -status -files.name');
};

const ModelClass = mongoose.model('record', recordSchema);

module.exports = ModelClass;

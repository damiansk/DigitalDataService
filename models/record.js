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
    thumbnail: String,
    path: String
  }],
  status: String,
  date: {type: Date, default: Date.now}
});

recordSchema.statics.getPreviewsOfUserRecords = function(userId) {
  return this.find({declarant: userId, status: 'new'})
            .populate('declarant', '-_id firstName lastName')
            .select('title resourceType keywords');
};

recordSchema.statics.getPreviewsOfReportedRecords = function(userId) {
  // return this.find({status: 'reported', declarant: {$not: userId}})
  return this.find({status: 'reported'})
    .populate('declarant', '-_id firstName lastName')
    .select('title resourceType keywords');
};

recordSchema.statics.getPreviewsOfAcceptedRecords = function(userId) {
  // return this.find({status: 'reported', declarant: {$not: userId}})
  return this.find({status: 'accepted'})
    .populate('declarant', '-_id firstName lastName')
    .select('title resourceType keywords');
};

recordSchema.statics.getPreviewsOfRejectedRecords = function(userId) {
  // return this.find({status: 'reported', declarant: {$not: userId}})
  return this.find({status: 'rejected'})
    .populate('declarant', '-_id firstName lastName')
    .select('title resourceType keywords');
};

recordSchema.statics.getPreviewsOfPublicRecords = function() {
  return this.find({status: 'accepted'})
    .select('title description date');
};

recordSchema.statics.searchPublicRecords = function(term) {
  return this.find({
      status: 'accepted',
      $or:[
        {title: new RegExp(term, "i")},
        {description: new RegExp(term, "i")},
        {keywords: new RegExp('^'+term+'$', "i")}
      ]
  })
    .select('title description date');
};

recordSchema.statics.getRecord = function(recordId) {
  return this.findOne({_id: recordId})
    .populate('declarant', '-_id firstName lastName')
    .select('-__v -status -files.path');
};

recordSchema.statics.getPublicRecord = function(recordId) {
  return this.findOne({_id: recordId, status: 'accepted'})
    .populate('declarant', '-_id firstName lastName')
    .select('-__v -status -files.path');
};

recordSchema.statics.getRecordFiles = function(recordID) {
  return this.findOne({_id: recordID})
    .select('-_id files');
};

recordSchema.statics.getPublicRecordFiles = function(recordID) {
  return this.findOne({_id: recordID, status: 'accepted'})
    .select('-_id files');
};

const ModelClass = mongoose.model('record', recordSchema);

module.exports = ModelClass;

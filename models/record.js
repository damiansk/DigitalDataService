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
  keywords: [String],
  files: [{
    name: String,
    description: String,
    thumbnail: String
  }]
});

recordSchema.statics.getPreviewsOfUserRecords = function(userId) {
  return this.find({declarant: userId})
            .populate('declarant', '-_id firstName lastName')
            .select('-_id title resourceType keywords');
};

const ModelClass = mongoose.model('record', recordSchema);

module.exports = ModelClass;

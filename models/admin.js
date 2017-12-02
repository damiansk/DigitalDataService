const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const adminSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  password: String
});


adminSchema.pre('save', function(next) {
  const user = this;
  console.log(user);
  
  // TODO Promise?
  bcrypt.genSalt(10, (err, salt) => {
    if(err) return next(err);
    
    bcrypt.hash(user.password, salt,null, (err, hash) => {
      if(err) return next(err);
      
      user.password = hash;
      next();
    });
  });
});

const ModelClass = mongoose.model('admin', adminSchema);

module.exports = ModelClass;

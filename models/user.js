const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true
  },
  firstName: String,
  lastName: String,
  password: String
});


userSchema.pre('save', function(next) {
  const user = this;
  
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

userSchema.methods.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if(err) return callback(err);
    
    return callback(null, isMatch);
  });
};

const ModelClass = mongoose.model('user', userSchema);

module.exports = ModelClass;

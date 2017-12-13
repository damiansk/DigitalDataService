const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');


userToken = user => jwt.encode({
  sub: user.id,
  iat: new Date().getTime(),
  exp: Math.floor(Date.now() / 1000) + (60 * 60)
}, config.secret);

exports.signin = (req, res, next) => {
  res.json({token: userToken(req.user)});
};

exports.signup = (req, res, next) => {
  const { email, password } = req.body;
  
  if(!email || !password)
    return res.status(400).send({error: 'You must provide email and password'});
  
  // TODO Try implement this in a promise chain
  User.findOne({email}, (err, existingUser) => {
    if(err) return next(err);
  
    if(existingUser)
      return res.status(422).send({error: 'Email is in use'});
  
    const user = new User({email, password});
    user.save(err => {
      if(err) return next(err);
  
      res.json({token: userToken(user)});
    })
  });
};

exports.verifyAuth = (req, res, next) => {
  res.json({token: userToken(req.user)});
};
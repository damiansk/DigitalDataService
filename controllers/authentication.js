const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');


userToken = user => jwt.encode({
  sub: user.id,
  iat: new Date().getTime(),
  exp: Math.floor(Date.now() / 1000) + (60 * 60)
}, config.secret);

exports.signin = (req, res, next) => {
  const { firstName, lastName } = req.user;
  
  res.json({
    token: userToken(req.user),
    user: { firstName, lastName }
  });
};

exports.signup = (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;
  
  if(!email || !password)
    return res.status(422).send({error: 'You must provide email and password'});
  
  // TODO Try implement this in a promise chain
  User.findOne({email}, (err, existingUser) => {
    if(err) return next(err);
  
    if(existingUser)
      return res.status(422).send({error: 'Email is in use'});
  
    const user = new User({email, password, firstName, lastName});
    user.save(err => {
      if(err) return next(err);
  
      const { firstName, lastName } = user;
      
      res.json({
        token: userToken(user),
        user: { firstName, lastName }
      });
    })
  });
};

exports.verifyAuth = (req, res) => {
  const { firstName, lastName } = req.user;
  
  res.json({
    token: userToken(req.user),
    user: { firstName, lastName }
  });
};
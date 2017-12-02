const Admin = require('../models/admin');

exports.signup = (req, res, next) => {
  const { email, password } = req.body;
  
  if(!email || !password)
    return res.status(400).send({error: 'You must provide email and password'});
  
  // TODO Try implement this in a promise chain
  Admin.findOne({email}, (err, existingAdmin) => {
    if(err) return next(err);
  
    if(existingAdmin)
      return res.status(422).send({error: 'Email is in use'});
  
    const admin = new Admin({email, password});
    admin.save(err => {
      if(err) return next(err);
  
      res.json(admin);
    })
  });
};
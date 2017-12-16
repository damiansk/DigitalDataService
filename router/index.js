const fs = require('fs');
const multipart = require('connect-multiparty');
const passportService = require('../services/passport');
const passport = require('passport');

const Records = require('../controllers/records');
const Authentication = require('../controllers/authentication');

const uploadDir = './uploaded_files';
fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = app => {

  app.get('/', requireAuth, (req, res) => {
    res.send({hi: 'there'});
  });
  app.post('/signIn', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);
  app.post('/auth', requireAuth, Authentication.verifyAuth);
  
  app.post('/records/new', requireAuth, Records.createRecord);
};
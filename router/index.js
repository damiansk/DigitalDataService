const fs = require('fs');
const passportService = require('../services/passport');
const passport = require('passport');

const Records = require('../controllers/records');
const Authentication = require('../controllers/authentication');

const {
  API_AUTH_USER,
  API_CREATE_RECORD,
  API_SIGN_IN,
  API_SIGN_UP,
  API_USER_RECORDS
} = require('../constants/api');

const uploadDir = './files-storage';
fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);


const requireAuth = passport.authenticate('jwt', {session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = app => {

  app.get('/', requireAuth, (req, res) => {
    res.send({hi: 'there'});
  });
  app.post(API_SIGN_IN, requireSignin, Authentication.signin);
  app.post(API_SIGN_UP, Authentication.signup);
  app.post(API_AUTH_USER, requireAuth, Authentication.verifyAuth);
  
  app.post(API_CREATE_RECORD, requireAuth, Records.createRecord);
  app.get(API_USER_RECORDS, requireAuth, Records.getRecords);
};
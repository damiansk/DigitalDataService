const fs = require('fs');
const passportService = require('../services/passport');
const passport = require('passport');

const Records = require('../controllers/records');
const Record = require('../controllers/record');
const FileThumbnail = require('../controllers/fileThumbnail');
const Authentication = require('../controllers/authentication');

const {
  API_AUTH_USER,
  API_CREATE_RECORD,
  API_SIGN_IN,
  API_SIGN_UP,
  API_USER_RECORDS,
  API_REPORTED_RECORDS,
  API_ACCEPTED_RECORDS,
  API_REJECTED_RECORDS,
  API_PUBLIC_RECORDS,
  API_RECORD,
  API_PUBLIC_RECORD,
  API_REPORT_RECORD,
  API_ACCEPT_RECORD,
  API_REJECT_RECORD,
  API_RESTORE_RECORD,
  API_RECORD_FILE,
  API_PUBLIC_RECORD_FILE,
  API_DELETE_RECORD,
  API_FILE_THUMBNAIL
} = require('../constants/api');


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
  
  app.get(API_USER_RECORDS, requireAuth, Records.getUserRecords);
  app.get(API_REPORTED_RECORDS, requireAuth, Records.getReportedRecords);
  app.get(API_ACCEPTED_RECORDS, requireAuth, Records.getAcceptedRecords);
  app.get(API_REJECTED_RECORDS, requireAuth, Records.getRejectedRecords);
  app.get(API_PUBLIC_RECORDS, Records.getPublicRecords);
  app.get(API_RECORD, requireAuth, Record.getRecord);
  app.get(API_PUBLIC_RECORD, Record.getPublicRecord);
  app.get(API_RECORD_FILE,requireAuth, Record.getRecordFile);
  app.get(API_PUBLIC_RECORD_FILE, Record.getPublicRecordFile);
  
  app.put(API_REPORT_RECORD, requireAuth, Record.reportRecord);
  app.put(API_ACCEPT_RECORD, requireAuth, Record.acceptRecord);
  app.put(API_REJECT_RECORD, requireAuth, Record.rejectRecord);
  app.put(API_RESTORE_RECORD, requireAuth, Record.restoreRecord);
  
  app.delete(API_DELETE_RECORD, requireAuth, Record.deleteRecord);
  
  app.post(API_FILE_THUMBNAIL, FileThumbnail.generateThumbnail);
};
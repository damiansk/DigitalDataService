const _ROOT = '/api';

module.exports = {
  API_SIGN_IN: _ROOT + '/signIn',
  API_SIGN_UP: _ROOT + '/signup',
  API_AUTH_USER: _ROOT + '/auth',
  API_CREATE_RECORD: _ROOT + '/records/new',
  API_USER_RECORDS: _ROOT + '/records',
  API_REPORTED_RECORDS: _ROOT + '/records/reported',
  API_ACCEPTED_RECORDS: _ROOT + '/records/accepted',
  API_REJECTED_RECORDS: _ROOT + '/records/rejected',
  API_PUBLIC_RECORDS: _ROOT + '/records/public',
  API_RECORD: _ROOT + '/record',
  API_PUBLIC_RECORD: _ROOT + '/record/public',
  API_REPORT_RECORD: _ROOT + '/record/report',
  API_ACCEPT_RECORD: _ROOT + '/record/accept',
  API_REJECT_RECORD: _ROOT + '/record/reject',
  API_RESTORE_RECORD: _ROOT + '/record/restore',
  API_RECORD_FILE: _ROOT + '/record/:recordID/file',
  API_FILE_THUMBNAIL: _ROOT + '/file/thumbnail'
};


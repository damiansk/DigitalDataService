const _ROOT = '/api';

export const API_SIGN_IN = _ROOT + '/signIn';
export const API_SIGN_UP = _ROOT + '/signup';
export const API_AUTH_USER = _ROOT + '/auth';

export const API_GET_USER_RECORDS = _ROOT + '/records';
export const API_GET_REPORTED_RECORDS = _ROOT + '/records/reported';
export const API_GET_ACCEPTED_RECORDS = _ROOT + '/records/accepted';
export const API_GET_REJECTED_RECORDS = _ROOT + '/records/rejected';

export const API_POST_RECORD = _ROOT + '/records/new';
export const API_GET_RECORD = _ROOT + '/record';
export const API_GET_RECORD_FILE = _ROOT + '/record/:recordId/file';

export const API_PUT_RECORD_REPORT = _ROOT + '/record/report';
export const API_PUT_RECORD_ACCEPT = _ROOT + '/record/accept';
export const API_PUT_RECORD_REJECT = _ROOT + '/record/reject';
export const API_PUT_RECORD_RESTORE = _ROOT + '/record/restore';

export const API_GET_RECORDS_PUBLIC = _ROOT + '/records/public';
export const API_GET_RECORD_PUBLIC = _ROOT + '/record/public';

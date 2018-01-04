export const ADMIN = '/admin';
export const SIGN_IN = ADMIN + '/signin';
export const SIGN_OUT = ADMIN + '/signout';

export const RECORD_NEW = ADMIN + '/record/new';
export const RECORD_EDIT = ADMIN + '/record/edit/:id';
export const RECORD_PREVIEW = ADMIN + '/record/preview/:id';
export const RECORD_UPDATE_ACCEPT = ADMIN + '/record/accept/:id';
export const RECORD_UPDATE_STATUS = ADMIN + '/record/update_status/:recordId/:newStatus';

export const RECORDS = ADMIN + '/records';
export const RECORDS_NEW = ADMIN + '/records/new';
export const RECORDS_REPORTED = ADMIN + '/records/reported';
export const RECORDS_ACCEPTED = ADMIN + '/records/accepted';
export const RECORDS_REJECTED = ADMIN + '/records/rejected';

export const ACCOUNT = ADMIN + '/account';

export const PUBLIC_RECORD_PREVIEW = '/record/preview/:id';

export const mapPathVariables = (path, pathVars) => {
  let mappedPath = path;
  for(let key in pathVars) {
    mappedPath = mappedPath.replace(`:${key}`, pathVars[key]);
  }
  return mappedPath;
};
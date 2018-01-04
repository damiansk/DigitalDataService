const _ADMIN = '/admin';
export const SIGN_IN = _ADMIN + '/signin';
export const SIGN_OUT = _ADMIN + '/signout';

export const RECORD_NEW = _ADMIN + '/record/new';
export const RECORD_EDIT = _ADMIN + '/record/edit/:id';
export const RECORD_PREVIEW = _ADMIN + '/record/preview/:id';
export const RECORD_UPDATE_ACCEPT = _ADMIN + '/record/accept/:id';
export const RECORD_UPDATE_STATUS = _ADMIN + '/record/update_status/:recordId/:newStatus';

export const RECORDS = _ADMIN + '/records';
export const RECORDS_NEW = _ADMIN + '/records/new';
export const RECORDS_REPORTED = _ADMIN + '/records/reported';
export const RECORDS_ACCEPTED = _ADMIN + '/records/accepted';
export const RECORDS_REJECTED = _ADMIN + '/records/rejected';

export const ACCOUNT = _ADMIN + '/account';

export const PUBLIC_RECORD_PREVIEW = '/record/preview/:id';

export const mapPathVariables = (path, pathVars) => {
  let mappedPath = path;
  for(let key in pathVars) {
    mappedPath = mappedPath.replace(`:${key}`, pathVars[key]);
  }
  return mappedPath;
};
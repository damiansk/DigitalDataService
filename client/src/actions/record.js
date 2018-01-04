import {
  API_PUT_REPORT_RECORD,
  API_PUT_ACCEPT_RECORD,
  API_PUT_REJECT_RECORD,
  API_PUT_RESTORE_RECORD,
  API_GET_RECORD,
  API_GET_PUBLIC_RECORD
} from '../constants/api';
import {
  API_CALL,
  RECORD_REPORT_RECORD_PENDING, RECORD_REPORT_RECORD_SUCCESS, RECORD_REPORT_RECORD_ERROR,
  RECORD_ACCEPT_RECORD_PENDING, RECORD_ACCEPT_RECORD_SUCCESS, RECORD_ACCEPT_RECORD_ERROR,
  RECORD_GET_RECORD_PENDING, RECORD_GET_RECORD_SUCCESS, RECORD_GET_RECORD_ERROR,
  RECORD_REJECT_RECORD_PENDING, RECORD_REJECT_RECORD_SUCCESS, RECORD_REJECT_RECORD_ERROR,
  RECORD_RESTORE_RECORD_PENDING, RECORD_RESTORE_RECORD_SUCCESS, RECORD_RESTORE_RECORD_ERROR
} from '../constants/actions';


export function fetchPublicRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      unsecured: true,
      endpoint: API_GET_PUBLIC_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_GET_RECORD_PENDING,
        success: RECORD_GET_RECORD_SUCCESS,
        error: RECORD_GET_RECORD_ERROR,
      }
    }
  };
}

export function fetchRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_GET_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_GET_RECORD_PENDING,
        success: RECORD_GET_RECORD_SUCCESS,
        error: RECORD_GET_RECORD_ERROR,
      }
    }
  };
}

export function reportRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_REPORT_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_REPORT_RECORD_PENDING,
        success: RECORD_REPORT_RECORD_SUCCESS,
        error: RECORD_REPORT_RECORD_ERROR,
      }
    }
  }
}

export function acceptRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_ACCEPT_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_ACCEPT_RECORD_PENDING,
        success: RECORD_ACCEPT_RECORD_SUCCESS,
        error: RECORD_ACCEPT_RECORD_ERROR,
      }
    }
  }
}

export function rejectRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_REJECT_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_REJECT_RECORD_PENDING,
        success: RECORD_REJECT_RECORD_SUCCESS,
        error: RECORD_REJECT_RECORD_ERROR,
      }
    }
  }
}

export function restoreRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_RESTORE_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_RESTORE_RECORD_PENDING,
        success: RECORD_RESTORE_RECORD_SUCCESS,
        error: RECORD_RESTORE_RECORD_ERROR,
      }
    }
  }
}
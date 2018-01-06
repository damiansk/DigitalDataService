import {
  API_PUT_RECORD_REPORT,
  API_PUT_RECORD_ACCEPT,
  API_PUT_RECORD_REJECT,
  API_PUT_RECORD_RESTORE,
  API_GET_RECORD,
  API_DELETE_RECORD,
  API_GET_RECORD_PUBLIC
} from '../constants/api';
import {
  API_CALL,
  RECORD_GET_RECORD_PENDING, RECORD_GET_RECORD_SUCCESS, RECORD_GET_RECORD_ERROR,
  API_PUT_RECORD_UPDATE_STATE_PENDING, API_PUT_RECORD_UPDATE_STATE_SUCCESS, API_PUT_RECORD_UPDATE_STATE_ERROR
} from '../constants/actions';


export function fetchPublicRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      unsecured: true,
      endpoint: API_GET_RECORD_PUBLIC,
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
      endpoint: API_PUT_RECORD_REPORT,
      params: {id: recordId},
      types: {
        pending: API_PUT_RECORD_UPDATE_STATE_PENDING,
        success: API_PUT_RECORD_UPDATE_STATE_SUCCESS,
        error: API_PUT_RECORD_UPDATE_STATE_ERROR,
      }
    }
  }
}

export function acceptRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_RECORD_ACCEPT,
      params: {id: recordId},
      types: {
        pending: API_PUT_RECORD_UPDATE_STATE_PENDING,
        success: API_PUT_RECORD_UPDATE_STATE_SUCCESS,
        error: API_PUT_RECORD_UPDATE_STATE_ERROR,
      }
    }
  }
}

export function rejectRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_RECORD_REJECT,
      params: {id: recordId},
      types: {
        pending: API_PUT_RECORD_UPDATE_STATE_PENDING,
        success: API_PUT_RECORD_UPDATE_STATE_SUCCESS,
        error: API_PUT_RECORD_UPDATE_STATE_ERROR,
      }
    }
  }
}

export function removeRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'delete',
      endpoint: API_DELETE_RECORD,
      params: {id: recordId},
      types: {
        pending: API_PUT_RECORD_UPDATE_STATE_PENDING,
        success: API_PUT_RECORD_UPDATE_STATE_SUCCESS,
        error: API_PUT_RECORD_UPDATE_STATE_ERROR,
      }
    }
  }
}

export function restoreRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      method: 'put',
      endpoint: API_PUT_RECORD_RESTORE,
      params: {id: recordId},
      types: {
        pending: API_PUT_RECORD_UPDATE_STATE_PENDING,
        success: API_PUT_RECORD_UPDATE_STATE_SUCCESS,
        error: API_PUT_RECORD_UPDATE_STATE_ERROR,
      }
    }
  }
}
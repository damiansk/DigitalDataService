import {
  API_PUT_REPORT_RECORD,
  API_PUT_ACCEPT_RECORD
} from '../constants/api';
import {
  API_CALL,
  RECORD_REPORT_RECORD_ERROR,
  RECORD_REPORT_RECORD_PENDING,
  RECORD_REPORT_RECORD_SUCCESS,
  RECORD_ACCEPT_RECORD_PENDING,
  RECORD_ACCEPT_RECORD_SUCCESS,
  RECORD_ACCEPT_RECORD_ERROR
} from '../constants/actions';


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
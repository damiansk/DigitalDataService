import { push } from 'react-router-redux';

import { mapRecordToFormData } from '../utils/formMapping';
import {
  API_CREATE_RECORD,
  API_GET_ACCEPTED_RECORDS,
  API_GET_RECORD,
  API_GET_REPORTED_RECORDS,
  API_GET_USER_RECORDS
} from '../constants/api';
import { RECORDS } from '../constants/routes';
import {
  RECORD_CREATE_RECORD_PENDING,
  RECORD_CREATE_RECORD_SUCCESS,
  RECORD_CREATE_RECORD_ERROR,
  RECORDS_USER_RECORDS_PENDING,
  RECORDS_USER_RECORDS_SUCCESS,
  RECORDS_USER_RECORDS_ERROR,
  RECORD_GET_RECORD_PENDING,
  RECORD_GET_RECORD_SUCCESS,
  RECORD_GET_RECORD_ERROR,
  RECORDS_REPORTED_RECORDS_PENDING,
  RECORDS_REPORTED_RECORDS_SUCCESS,
  RECORDS_REPORTED_RECORDS_ERROR,
  API_GET_ACCEPTED_RECORDS_PENDING,
  API_GET_ACCEPTED_RECORDS_SUCCESS,
  API_GET_ACCEPTED_RECORDS_ERROR,
  API_CALL
} from '../constants/actions';


export function saveRecord(formRecord) {
  return dispatch => dispatch({
    type: '',
    [API_CALL]: {
      endpoint: API_CREATE_RECORD,
      headers: {'Content-Type': 'multipart/form-data'},
      method: 'post',
      data: mapRecordToFormData(formRecord),
      types: {
        pending: RECORD_CREATE_RECORD_PENDING,
        success: RECORD_CREATE_RECORD_SUCCESS,
        error: RECORD_CREATE_RECORD_ERROR
      },
      callback: () => dispatch(push(RECORDS))
    }
  });
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

export function fetchUserRecords() {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_GET_USER_RECORDS,
      types: {
        pending: RECORDS_USER_RECORDS_PENDING,
        success: RECORDS_USER_RECORDS_SUCCESS,
        error: RECORDS_USER_RECORDS_ERROR
      }
    }
  };
}

export function fetchReportedRecords() {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_GET_REPORTED_RECORDS,
      types: {
        pending: RECORDS_REPORTED_RECORDS_PENDING,
        success: RECORDS_REPORTED_RECORDS_SUCCESS,
        error: RECORDS_REPORTED_RECORDS_ERROR
      }
    }
  };
}

export function fetchAcceptedRecords() {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_GET_ACCEPTED_RECORDS,
      types: {
        pending: API_GET_ACCEPTED_RECORDS_PENDING,
        success: API_GET_ACCEPTED_RECORDS_SUCCESS,
        error: API_GET_ACCEPTED_RECORDS_ERROR
      }
    }
  };
}

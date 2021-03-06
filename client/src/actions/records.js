import { push } from 'react-router-redux';

import { mapRecordToFormData } from '../utils/formMapping';
import {
  API_POST_RECORD,
  API_GET_ACCEPTED_RECORDS,
  API_GET_REPORTED_RECORDS,
  API_GET_USER_RECORDS,
  API_GET_PUBLIC_RECORDS,
  API_GET_REJECTED_RECORDS,
  API_SEARCH_RECORDS
} from '../constants/api';
import { RECORDS } from '../constants/routes';
import {
  RECORD_CREATE_RECORD_PENDING, RECORD_CREATE_RECORD_SUCCESS, RECORD_CREATE_RECORD_ERROR,
  RECORDS_USER_RECORDS_PENDING, RECORDS_USER_RECORDS_SUCCESS, RECORDS_USER_RECORDS_ERROR,
  RECORDS_REPORTED_RECORDS_PENDING, RECORDS_REPORTED_RECORDS_SUCCESS, RECORDS_REPORTED_RECORDS_ERROR,
  API_GET_ACCEPTED_RECORDS_PENDING, API_GET_ACCEPTED_RECORDS_SUCCESS, API_GET_ACCEPTED_RECORDS_ERROR,
  API_GET_PUBLIC_RECORDS_PENDING, API_GET_PUBLIC_RECORDS_SUCCESS, API_GET_PUBLIC_RECORDS_ERROR,
  API_GET_REJECTED_RECORDS_PENDING, API_GET_REJECTED_RECORDS_SUCCESS, API_GET_REJECTED_RECORDS_ERROR,
  API_CALL
} from '../constants/actions';


export function saveRecord(formRecord) {
  return dispatch => dispatch({
    type: '',
    [API_CALL]: {
      endpoint: API_POST_RECORD,
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

export function fetchRejectedRecords() {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_GET_REJECTED_RECORDS,
      types: {
        pending: API_GET_REJECTED_RECORDS_PENDING,
        success: API_GET_REJECTED_RECORDS_SUCCESS,
        error: API_GET_REJECTED_RECORDS_ERROR
      }
    }
  };
}

export function fetchPublicRecords() {
  return {
    type: '',
    [API_CALL]: {
      unsecured: true,
      endpoint: API_GET_PUBLIC_RECORDS,
      types: {
        pending: API_GET_PUBLIC_RECORDS_PENDING,
        success: API_GET_PUBLIC_RECORDS_SUCCESS,
        error: API_GET_PUBLIC_RECORDS_ERROR
      }
    }
  };
}

export function searchRecords(term) {
  console.log(term);
  return {
    type: '',
    [API_CALL]: {
      unsecured: true,
      endpoint: API_SEARCH_RECORDS,
      params: {term: term},
      types: {
        pending: API_GET_PUBLIC_RECORDS_PENDING,
        success: API_GET_PUBLIC_RECORDS_SUCCESS,
        error: API_GET_PUBLIC_RECORDS_ERROR
      }
    }
  };
  
}

import { push } from 'react-router-redux';

import { mapRecordToFormData } from '../utils/formMapping';
import { API_CREATE_RECORD, API_USER_RECORDS } from '../constants/api';
import {
  RECORD_FETCH,
  RECORD_CREATE_RECORD_PENDING,
  RECORD_CREATE_RECORD_SUCCESS,
  RECORD_CREATE_RECORD_ERROR,
  RECORDS_USER_RECORDS_PENDING,
  RECORDS_USER_RECORDS_SUCCESS,
  RECORDS_USER_RECORDS_ERROR,
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
      callback: () => dispatch(push('/records'))
    }
  });
}

export function fetchRecord(recordId) {
  return dispatch => {
    const mock = "{\"title\":\"Super Title 11121212\",\"resourceType\":\"Type of resource \",\"keywords\":\"Manga itp itd\",\"destination\":\"Students\",\"description\":\"Super simple description about this record\",\"files\":[{\"file\":{\"preview\":\"blob:http://localhost:3000/1d26ee20-c865-4a53-bc6d-a78b19c9fdfe\"},\"name\":\"Heart.obj\",\"description\":\"Auto generated description for Heart.obj...\",\"thumbnail\":\"\"},{\"file\":{\"preview\":\"blob:http://localhost:3000/47f0014f-1d0f-411d-868e-6fcd614506b8\"},\"name\":\"deer.obj\",\"description\":\"Auto generated description for deer.obj...\",\"thumbnail\":\"\"}]}";
    
    dispatch({
      type: RECORD_FETCH,
      payload: JSON.parse(mock)
    })
  }
}

export function fetchUserRecords() {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_USER_RECORDS,
      types: {
        pending: RECORDS_USER_RECORDS_PENDING,
        success: RECORDS_USER_RECORDS_SUCCESS,
        error: RECORDS_USER_RECORDS_ERROR
      }
    }
  };
}
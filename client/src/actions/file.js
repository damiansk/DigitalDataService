import {
  API_CALL,
  RECORD_GET_RECORD_FILE_ERROR,
  RECORD_GET_RECORD_FILE_PENDING,
  RECORD_GET_RECORD_FILE_SUCCESS,
  RECORD_RESET_RECORD_FILES
} from '../constants/actions';
import { API_GET_RECORD_FILE } from '../constants/api';

export function fetchFile(recordId, fileId) {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_GET_RECORD_FILE.replace(':recordId', recordId),
      params: {id: fileId},
      responseType: 'blob',
      types: {
        pending: RECORD_GET_RECORD_FILE_PENDING,
        success: RECORD_GET_RECORD_FILE_SUCCESS,
        error: RECORD_GET_RECORD_FILE_ERROR,
      }
    }
  };
}

export function removeFiles() {
  return {
    type: RECORD_RESET_RECORD_FILES
  }
}
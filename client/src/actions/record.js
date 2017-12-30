import { API_REPORT_RECORD } from '../constants/api';
import {
  API_CALL,
  RECORD_REPORT_RECORD_ERROR,
  RECORD_REPORT_RECORD_PENDING,
  RECORD_REPORT_RECORD_SUCCESS
} from '../constants/actions';

export function reportRecord(recordId) {
  return {
    type: '',
    [API_CALL]: {
      endpoint: API_REPORT_RECORD,
      params: {id: recordId},
      types: {
        pending: RECORD_REPORT_RECORD_PENDING,
        success: RECORD_REPORT_RECORD_SUCCESS,
        error: RECORD_REPORT_RECORD_ERROR,
      }
    }
  }
}
import axios from 'axios';

import { RECORDS_SAVE_RECORD } from '../constants/actions';
import { ADD_RECORD } from '../constants/api';


export function saveRecord(record) {
  return dispatch => {
    const { title, description, files } = record;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    axios.post(ADD_RECORD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };
}
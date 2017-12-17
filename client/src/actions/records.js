import axios from 'axios';

import { RECORDS_FETCH_USER_RECORDS, RECORDS_SAVE_RECORD, UNAUTH_USER } from '../constants/actions';
import { ADD_RECORD, USER_RECORDS } from '../constants/api';


export function saveRecord(record) {
  return dispatch => {
    const token = localStorage.getItem('token');
  
    if(!token || token === '') {
      return dispatch({type: UNAUTH_USER});
    }
    
    const {
      files: models = [],
      ...restRecordData
    } = record;
    const formData = new FormData();
    
    const {files, filesData} =
      models.map(({file, ...rest}, index) => ({
          file: {file, key: `${index}-${file.name}`},
          data: {...rest, key: `${index}-${file.name}`}
      }))
      .reduce((preVal, {file, data}) => ({
          files: [...preVal.files, file],
          filesData: [...preVal.filesData, data]
        }), {files: [], filesData: []});
    
    files.forEach(({file, key}) => formData.append(key, file));
    formData.append('files', JSON.stringify(filesData));
    formData.append('record', JSON.stringify(restRecordData));
  
    console.log('Form data: ', formData);
    console.log('Files: ', files);
  
    axios.post(ADD_RECORD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: token
      }
    });
  };
}

export function fetchUserRecords() {
  return dispatch => {
    const token = localStorage.getItem('token');
  
    if(!token || token === '') {
      return dispatch({type: UNAUTH_USER});
    }
    
    axios.get(USER_RECORDS, {headers: {authorization: token}})
    .then(response =>
      dispatch({
        type: RECORDS_FETCH_USER_RECORDS,
        payload: response.data.records
      }))
    .catch(err => console.log(err));
  }
}
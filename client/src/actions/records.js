import axios from 'axios';

import {
  RECORDS_FETCH_USER_RECORDS,
  RECORDS_SAVE_RECORD,
  RECORD_FETCH,
  UNAUTH_USER
} from '../constants/actions';
import { ADD_RECORD, USER_RECORDS } from '../constants/api';


export function saveRecord(record) {
  return dispatch => {
    const token = localStorage.getItem('token');
  
    if(!token || token === '') {
      return dispatch({type: UNAUTH_USER});
    }
  
    console.log(record);
  
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
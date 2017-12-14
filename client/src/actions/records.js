import axios from 'axios';

import { RECORDS_SAVE_RECORD } from '../constants/actions';
import { ADD_RECORD } from '../constants/api';


export function saveRecord(record) {
  return dispatch => {
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
    
    axios.post(ADD_RECORD, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };
}
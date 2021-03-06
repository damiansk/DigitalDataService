export const mapRecordToFormData = record => {
  const {
    files: models = [],
    ...restRecordData
  } = record;
  const formData = new FormData();
  
  restRecordData.keywords = restRecordData.keywords.split(' ');
  
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
  
  return formData;
};

export const mapEditedRecordToFormData = record => {
  const {
    files: models = [],
    ...restRecordData
  } = record;
  const formData = new FormData();
  
  restRecordData.keywords = Array.isArray(restRecordData.keywords)
                              ? restRecordData.keywords
                              : restRecordData.keywords.split(' ');
  
  const {files, filesData} =
    models.map(({file, ...rest}, index) => ({
        file: file ? {file, key: `${index}-${file.name}`} : null,
        data: {...rest, key: file ? `${index}-${file.name}` : rest._id}
      }))
      .reduce((preVal, {file, data}) => ({
        files: [...preVal.files, file],
        filesData: [...preVal.filesData, data]
      }), {files: [], filesData: []});
  
  files.filter(file => file !== null)
       .forEach(({file, key}) => formData.append(key, file));
  formData.append('files', JSON.stringify(filesData));
  formData.append('record', JSON.stringify(restRecordData));
  
  return formData;
};


exports.createRecord = (req, res, next) => {
  const { files } = req;
  let {files: filesData, record} = req.body;
  
  filesData = JSON.parse(filesData);
  record = JSON.parse(record);
  
  
  res.status(201);
  res.send();
};
const fs = require('fs');
const path = require('path');
const moveFile = require('move-file');
const multiparty = require('multiparty');
const Record = require('../models/record');


const temporaryFilesUploadDir = './temp-files',
      uploadDir = './files-storage';
fs.existsSync(temporaryFilesUploadDir) || fs.mkdirSync(temporaryFilesUploadDir);

exports.createRecord = (req, res) => {
  const { id: declarant } = req.user;
  const form = new multiparty.Form({uploadDir: temporaryFilesUploadDir});
  
  //TODO Fix directories structure
  form.parse(req, (err, fields, files) => {

    if(!fields) {
      return res.status(422);
    }
    let {files: filesData, record: recordInformation} = fields;

    filesData = JSON.parse(filesData);
    recordInformation = JSON.parse(recordInformation);

    const { title, description, destination, resourceType, keywords } = recordInformation;
  
    const record = new Record({
      declarant,
      title,
      description,
      destination,
      resourceType,
      keywords,
      status: 'new'
    });
    
    record.save((err, record) => {
      if(err) return next(err);
      
      record.files = filesData
        .map(({description, thumbnail, key}) => ({
          description,
          thumbnail,
          name: files[key][0].originalFilename,
          path: `${uploadDir}/${record.id}/${path.basename(files[key][0].path)}`,
          currentPath: files[key][0].path
        }))
        .map(file => {
          moveFile.sync(file.currentPath, file.path);
          delete file.currentPath;
          return file;
        });
      
      record.save(err => {
        if(err) return next(err);
        res.status(201).send();
      });
    })
    
  });
  
};

exports.getRecords = (req, res) => {
  Record.getPreviewsOfUserRecords(req.user.id)
    .then(
      data => res.status(200)
                .json({records: [...data]}),
      err => res.status(500)
              .json({error: 'There was an error when fetching data'})
    );
};

exports.getRecord = (req, res) => {
  Record.getRecord(req.query.id)
    .then(
      data => res.status(200)
        .json({record: data}),
      err => res.status(422)
        .json({error: 'Record not found'})
    );
};
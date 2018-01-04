const fs = require('fs');
const path = require('path');
const moveFile = require('move-file');
const multiparty = require('multiparty');
const Record = require('../models/record');


const rootDir = './storage',
      temporaryFilesUploadDir = rootDir + '/temp-files',
      uploadDir = rootDir + '/files-storage';
fs.existsSync(rootDir) || fs.mkdirSync(rootDir);
fs.existsSync(temporaryFilesUploadDir) || fs.mkdirSync(temporaryFilesUploadDir);
fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);

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

exports.getUserRecords = (req, res) => {
  Record.getPreviewsOfUserRecords(req.user.id)
    .then(
      data => res.status(200)
                .json({records: [...data]}),
      err => res.status(500)
              .json({error: 'There was an error when fetching data'})
    );
};

exports.getReportedRecords = (req, res) => {
  Record.getPreviewsOfReportedRecords(req.user.id)
    .then(
      data => res.status(200)
        .json({records: [...data]}),
      err => res.status(500)
        .json({error: 'There was an error when fetching data'})
    );
};

exports.getAcceptedRecords = (req, res) => {
  Record.getPreviewsOfAcceptedRecords(req.user.id)
    .then(
      data => res.status(200)
        .json({records: [...data]}),
      err => res.status(500)
        .json({error: 'There was an error when fetching data'})
    );
};

exports.getRejectedRecords = (req, res) => {
  Record.getPreviewsOfRejectedRecords(req.user.id)
    .then(
      data => res.status(200)
        .json({records: [...data]}),
      err => res.status(500)
        .json({error: 'There was an error when fetching data'})
    );
};

exports.getPublicRecords = (req, res) => {
  Record.getPreviewsOfPublicRecords()
    .then(
      data => res.status(200)
        .json({records: [...data]}),
      err => res.status(500)
        .json({error: 'There was an error when fetching data'})
    );
};

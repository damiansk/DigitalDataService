const Record = require('../models/record');
const fs = require('fs');
const path = require('path');
const moveFile = require('move-file');
const multiparty = require('multiparty');


const rootDir = './storage',
  temporaryFilesUploadDir = path.join(rootDir, 'temp-files'),
  uploadDir = path.join(rootDir, 'files-storage');
fs.existsSync(rootDir) || fs.mkdirSync(rootDir);
fs.existsSync(temporaryFilesUploadDir) || fs.mkdirSync(temporaryFilesUploadDir);
fs.existsSync(uploadDir) || fs.mkdirSync(uploadDir);

exports.getRecord = (req, res) => {
  Record.getRecord(req.query.id)
    .then(
      data => data ?
        res.status(200).json({record: data})
        :
        res.status(404).json({error: 'Record not found'}),
      err => res.status(422)
        .json({error: 'Record not found'})
    );
};

exports.getPublicRecord = (req, res) => {
  Record.getPublicRecord(req.query.id)
    .then(
      data => data ?
          res.status(200)
          .json({record: data})
        :
          res.status(404)
            .json({record: data}),
      err => res.status(422)
        .json({error: 'Record not found'})
    );
};

exports.getRecordFile = (req, res) => {
  const { recordID } = req.params;
  const fileID = req.query.id;
  Record.getRecordFiles(recordID)
    .then(
      ({files}) => {
        const file = files.find(file => file['_id'].equals(fileID));
  
        if(file) {
          res.status(200)
            .download(
              path.join(__dirname, '../', file.path),
              file.name,
              {headers: {
                  'content-type': 'multipart/form-data',
                  'content-id': fileID
                }}
            );
        } else {
          res.send(404);
        }
      },
      err => res.send(404)
    );
};

exports.getPublicRecordFile = (req, res) => {
  const { recordID } = req.params;
  const fileID = req.query.id;
  Record.getPublicRecordFiles(recordID)
    .then(
      ({files}) => {
        const file = files.find(file => file['_id'].equals(fileID));
        console.log('found');
        if(file) {
          res.status(200)
            .download(
              path.join(__dirname, '../', file.path),
              file.name,
              {headers: {
                  'content-type': 'multipart/form-data',
                  'content-id': fileID
                }}
            );
        } else {
          res.send(404);
        }
      },
      err => res.send(404)
    );
};

exports.reportRecord = (req, res) => {
  Record.findById(req.query.id, (err, record) => {
    if(err) return res.status(404)
                      .json({error: 'Record not found'});
    
    //TODO Add validation of current status
    record.status = 'reported';
    
    record.save(err => {
      if(err) return res.status(404)
        .json({error: 'Record not found'});
  
      res.status(200).send();
    })
  });
};

exports.acceptRecord = (req, res) => {
  Record.findById(req.query.id, (err, record) => {
    if(err) return res.status(404)
      .json({error: 'Record not found'});
    
    //TODO Add validation of current status
    record.status = 'accepted';
    
    record.save(err => {
      if(err) return res.status(404)
        .json({error: 'Record not found'});
      
      res.status(200).send();
    })
  });
};

exports.rejectRecord = (req, res) => {
  Record.findById(req.query.id, (err, record) => {
    if(err) return res.status(404)
      .json({error: 'Record not found'});
    
    //TODO Add validation of current status
    record.status = 'rejected';
    
    record.save(err => {
      if(err) return res.status(404)
        .json({error: 'Record not found'});
      
      res.status(200).send();
    })
  });
};

exports.restoreRecord = (req, res) => {
  Record.findById(req.query.id, (err, record) => {
    if(err) return res.status(404)
      .json({error: 'Record not found'});
    
    //TODO Add validation of current status
    record.status = 'new';
    
    record.save(err => {
      if(err) return res.status(404)
        .json({error: 'Record not found'});
      
      res.status(200).send();
    })
  });
};

exports.deleteRecord = (req, res) => {
  Record.findById(req.query.id, (err, record) => {
    if(err || !record) return res.status(404)
      .json({error: 'Record not found'});
    
      record.files.forEach(file => {
        if(file.path) {
          fs.unlinkSync(path.join(__dirname, '../', file.path));
        }
      });
      
      record.remove(err => {
        if(err) return next(err);
        res.status(200).send();
      });
  });
};

exports.updateRecord = (req, res) => {
  const { id: declarant } = req.user;
  const form = new multiparty.Form({uploadDir: temporaryFilesUploadDir});
  
  form.parse(req, (err, fields, files) => {
    
    if(!fields) {
      return res.status(422);
    }
    let {files: filesData, record: recordInformation} = fields;
    
    filesData = JSON.parse(filesData);
    recordInformation = JSON.parse(recordInformation);
    
    Record.findOne({_id: recordInformation._id})
      .populate('declarant', '-_id firstName lastName')
      .then(record => {
        if(!record) res.status(404).json({error: 'Record not found'});
    
        record.set('title', recordInformation.title);
        record.set('description', recordInformation.description);
        record.set('destination', recordInformation.destination);
        record.set('resourceType', recordInformation.resourceType);
        record.set('keywords', recordInformation.keywords);
        
        const filesToDelete = [];
        let newFiles = filesData.filter(file => !file._id);
        
        const presentFiles = record.files.map(oldFile => {
          const presentFile = filesData.find(data => data._id === oldFile.get('_id').toString());
          
          if(!presentFile) {
            filesToDelete.push(oldFile);
            return null;
          }
  
          oldFile.set('name', presentFile.name);
          oldFile.set('description', presentFile.description);
          oldFile.set('thumbnail', presentFile.thumbnail);
          
          return oldFile;
        }).filter(file => file !== null);
        
        newFiles = newFiles.map(({description, thumbnail, key}) => {
          const ID = record.get('_id').toString();
          const baseName = path.basename(files[key][0].path);
          const name = files[key][0].originalFilename;
          
          const newPath = path.join(uploadDir, ID, baseName);
  
          return {
            description,
            thumbnail,
            name: name,
            path: newPath,
            currentPath: files[key][0].path
          }})
          .map(file => {
            moveFile.sync(file.currentPath, file.path);
            delete file.currentPath;
            return file;
          });
        
        filesToDelete.forEach(file => {
          if(file.path) {
            fs.unlinkSync(path.join(__dirname, '../', file.path));
          }
        });
        
        record.set('files', [...newFiles, ...presentFiles]);
        
        record.save(err => {
          res.status(200).send({record});
        });
      },
        err => res.status(422)
          .json({error: 'Record not found'})
      );
    
    
    // const { title, description, destination, resourceType, keywords } = recordInformation;
    //
    // const record = new Record({
    //   declarant,
    //   title,
    //   description,
    //   destination,
    //   resourceType,
    //   keywords,
    //   status: 'new'
    // });
    //
    // record.save((err, record) => {
    //   if(err) return next(err);
    //
    //   record.files = filesData
    //     .map(({description, thumbnail, key}) => ({
    //       description,
    //       thumbnail,
    //       name: files[key][0].originalFilename,
    //       // path: `${uploadDir}/${record.id}/${path.basename(files[key][0].path)}`,
    //       path: path.join(uploadDir, record.id, path.basename(files[key][0].path)),
    //       currentPath: files[key][0].path
    //     }))
    //     .map(file => {
    //       moveFile.sync(file.currentPath, file.path);
    //       delete file.currentPath;
    //       return file;
    //     });
    //
    //   record.save(err => {
    //     if(err) return next(err);
    //     res.status(201).send();
    //   });
    // })
    //
  });
};
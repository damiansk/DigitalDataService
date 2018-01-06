const Record = require('../models/record');
const fs = require('fs');
const path = require('path');

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
  console.log('doszedlem');
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
      err => console.log(err)
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
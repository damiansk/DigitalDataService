const Record = require('../models/record');

exports.getRecord = (req, res) => {
  Record.getRecord(req.query.id)
    .then(
      data => res.status(200)
        .json({record: data}),
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
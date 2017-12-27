const multiparty = require('multiparty');
const Record = require('../models/record');


exports.createRecord = (req, res) => {
  const { id: declarant } = req.user;
  const form = new multiparty.Form();
  
  //TODO Fix directories structure
  form.parse(req, (err, fields, files) => {

    if(!fields) {
      return res.status(422);
    }
    let {files: filesData, record: recordInformation} = fields;

    filesData = JSON.parse(filesData);
    recordInformation = JSON.parse(recordInformation);

    const { title, description, destination, resourceType, keywords } = recordInformation;
    
    const filesToStore = filesData.map(({description, thumbnail, key}) => ({
      description,
      thumbnail,
      name: files[key][0].path
    }));
    
    const record = new Record({
      declarant,
      title,
      description,
      destination,
      resourceType,
      keywords,
      files: filesToStore,
      status: 'new'
    });
    
    record.save(err => {
      if(err) return next(err);
      
      res.status(201).send();
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
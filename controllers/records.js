const multiparty = require('multiparty');
const Record = require('../models/record');


exports.createRecord = (req, res) => {
  const { id: declarant } = req.user;
  const form = new multiparty.Form();
  
  //TODO Fix directories structure
  form.parse(req, (err, fields, files) => {

    let {files: filesData, record: recordInformation} = fields;

    filesData = JSON.parse(filesData);
    recordInformation = JSON.parse(recordInformation);

    const { title, description, resourceType, keywords } = recordInformation;
    
    const filesToStore = filesData.map(({description, thumbnail, key}) => ({
      description,
      thumbnail,
      name: files[key][0].path
    }));
    
    const record = new Record({
      declarant,
      title,
      description,
      resourceType,
      keywords,
      files: filesToStore
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
      data => {
        res.status(200)
          .json({records: [...data]});
      },
      err => console.log(err));
};
const Record = require('../models/record');

exports.reportRecord = (req, res) => {
  Record.findById(req.query.id, (err, record) => {
    if(err) return res.status(404)
                      .json({error: 'Record not found'});
    
    record.status = 'reported';
    
    record.save(err => {
      if(err) return res.status(404)
        .json({error: 'Record not found'});
  
      res.status(200).send();
    })
  });
};
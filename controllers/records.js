

exports.createRecord = (req, res, next) => {
  console.log(req.body);
  console.log(req.files);
  
  res.status(201);
  res.send();
};
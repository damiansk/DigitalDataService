module.exports = app => {
  
  app.get('/', (req, res) => {
    res.send(['some', 'awesome', 'array']);
  });
  
};
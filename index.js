const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router = require('./router');
const app = express();

const DBHOST = process.env.DBHOST || 'localhost';
const PORT = process.env.PORT || 5000;

setTimeout(() => {
  mongoose.connect(`mongodb://${DBHOST}/digitaldata`);
  
  app.use(morgan('combined'));
  app.use(bodyParser.json());
  app.use('/', express.static(path.join( __dirname, 'client', 'build' )));
  app.use('/admin', express.static(path.join( __dirname, 'client', 'build' )));
  router(app);
  
  app.listen(PORT);
  
  console.log(`Server running on port ${PORT}`);
  
  const User = require('./models/user');
  
  setTimeout(() => {
    const user = new User({
      email: 'mail@mail.com',
      password: 'test123',
      firstName: 'Damian',
      lastName: 'Stolarek',
    });
  
    user.save(err => {
      console.log(err);
      console.log('User saved');
    });
  }, 8000);
}, 4000);


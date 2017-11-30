const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();


app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send({ message: 'Hello there' });
});

app.listen(PORT);

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'))

app.use(express.static(__dirname + '/public'));

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json())

//CRUD create, read, update, delete
// get, post, put, delete - routes

//request, response
app.get('/', (req, res, next) => {
  try {
      res.send('Hello World')
  } catch (error){
      console.log('error: ', error)
      next(error)
    }
})

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
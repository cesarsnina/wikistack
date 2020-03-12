const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const { db } = require('./models');
const models = require('./models');

const app = express();

app.use(morgan('dev'))

app.use(express.static(__dirname + '/'));

// parses url-encoded bodies
app.use(express.urlencoded({ extended: false }));

// parses json bodies
app.use(express.json())

//CRUD create, read, update, delete
// get, post, put, delete - routes

//request, response
app.get('/', (req, res, next) => {
  try {
      res.send(layout(''))
  } catch (error){
      console.log('error: ', error)
      next(error)
    }
})

db.authenticate().
then(() => {
  console.log('connected to the database');
})

const PORT = 4000;

const init = async () => {
  await models.Page.sync()
  await models.User.sync()

  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}

init(); 
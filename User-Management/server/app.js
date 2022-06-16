const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const users = require('./routes/users');
const cors = require('cors');
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
 app.use(function(req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
   res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept, Authorization'
   );
   next();
 });

app.use('/api/users', users);

const db = 'mongodb://localhost/user';
mongoose
  .connect(db, {
    useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
  })
  .then(console.log('MongoDB connected'))
  .catch(err => console.log(err)); // Maybe return res code 500

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {

  // const port = server.address().port;
  console.log(`server runs on  port ${PORT}`);
});

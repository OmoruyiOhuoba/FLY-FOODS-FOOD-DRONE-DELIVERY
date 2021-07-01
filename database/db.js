const mongoose = require('mongoose');
const { mongoURI } = require('../config/keys');

const connection = mongoURI;
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));
 
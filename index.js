const express = require("express");
const enforce = require('express-sslify');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("./database/db");
const route = require("./routes/flyfoods-routes");
const passport = require("passport");
let nodemailer = require('nodemailer');
const path = require('path');
 

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(passport.initialize());
require("./config/passport")(passport);
app.use("/api/flyfoods", route );


  if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
    app.use(enforce.HTTPS({ trustProtoHeader: true }))
    app.use(express.static('client/build'));
    
    app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
    }); 
  };  

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  app.use((err, req, res) => { 
    res.status(err.status || 500);

    res.json({
      errors: {
        message: err.message,
        error: err,
      },
    });
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);
  
    res.json({
      errors: {
        message: err.message,
        error: {},
      },
    });
  });


app.listen(port, () => {
    console.log("Server is running on port " + port)
});


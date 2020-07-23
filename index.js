const express = require("express"); // to import express from common js module since node dosenot suppoert es2015
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./model/User");
require("./service/passport");

mongoose.connect(keys.mongoURI);

const app = express(); // create express app, in a project we need multiple express apps , set configuration for express in app

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; // Dynamic port binding for Hureku
app.listen(PORT);

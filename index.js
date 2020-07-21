const express = require("express"); // to import express from common js module since node dosenot suppoert es2015
const app = express(); // create express app, in a project we need multiple express apps , set configuration for express in app

// assign the router to express app
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

/*
1. app is running express server, creates a brand new route handler for app
2. get is get request
3. '/' is root route
4. req is request
5. res response 
*/

const PORT = process.env.PORT || 5000; // Dynamic port binding for Hureku
app.listen(PORT); //listen to port 5000

require('newrelic');
const express = require('express');
const redis = require('redis')

const app = require('./app.js');


app.listen(3000, (err) => {
  if (err) {
    console.log('Error connecting to the port :', err);
  } else {
    console.log('Hero Photo server is listening on port 3000');
  }
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/');
const redis = require('redis')


const app = express();


const client = redis.createClient();

client.on('connect', () => {
    console.log(`connected to redis`);
});
client.on('error', err => {
    console.log(`Error: ${err}`);
});

// making a middleware to track all incoming requests
app.use((req, res, next) => {
  console.log('Request method: ', req.method);
  next();
});

// access the static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/listings/:listing_id/photos', (req, res) => {
  const listingId = req.params.listing_id;
  // query the database to get all data from the listing_photos table
  client.get(listingId, function (err, result) {
    if (result) {
      // console.log('you just used cached data, you saved time yo!')
      res.send(result)
    } else {
      // console.log('you just saved stuff to cache')
      db.select().from('photos').where('listing_id', listingId).then(function(data){
        client.set(listingId, JSON.stringify(data))
        res.send(data)
      }).catch(function(response){
        res.send('error bruh', response)
      })
    }
  })
  // res.send(200);
});

app.get('/listings/photos/:photo_id', (req, res) => {
  const photoId = req.params.photo_id;
  // query the database to get all data from the listing_photos table
  db.select().from('photos').where('id', photoId).then(function (data) {
    res.send(data);
  })
  // res.send(200);
});

app.post('/listings/:listing_id/photos', (req, res) => {
  // console.log(req.body);
  db.insert(req.body).returning('*').into('photos').then(function(data) {
    res.send(data);
  })

})

app.put('/listings/photos/:photo_id', (req, res) => {
  const photoId = req.params.photo_id;

  db('photos').where({ id: photoId }).update(req.body).returning('*').then(function(data) {
    res.send(data)
  })

})

app.delete('/listings/photos/:photo_id', (req, res) => {
  const photoId = req.params.photo_id;

  db('photos').where({ id: photoId }).del().then(function() {
    res.json({success: true});
  });
});

module.exports = app;

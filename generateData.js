'use strict';

module.exports = {
  generateRandomData: generateRandomData,
  randomListingId: randomListingId,
  randomPhotoId: randomPhotoId,
  generateForUpdate: generateForUpdate,
};

// Make sure to "npm install faker" first.

function generateRandomData(userContext, events, done) {
  // generate data with Faker:
  const url = `www.artilleryurl.com`;
  const description = `this just got added by artillery`;
  let listing_id = Math.ceil(Math.random() * 10000000)
  // add variables to virtual user's context:
  userContext.vars.url = url;
  userContext.vars.description = description;
  userContext.vars.listing_id = listing_id;

  // continue with executing the scenario:
  return done();
}

function randomListingId(userContext, events, done) {
    const id = Math.ceil(Math.random() * 10000000);
    userContext.vars.id = id;
    return done();
}

function randomPhotoId(userContext, events, done) {
    const id = Math.ceil(Math.random() * 70000000);
    userContext.vars.id = id;
    return done();
}

function generateForUpdate(userContext, events, done) {
  // generate data with Faker:
  const url = `www.updatedartillery.com`;
  const description = `YOU JUST GOT UPDATED BRUH`;
  const id = Math.ceil(Math.random() * 70000000)
  // add variables to virtual user's context:
  userContext.vars.url = url;
  userContext.vars.description = description;
  userContext.vars.photoId = id;

  // continue with executing the scenario:
  return done();
}


// redis or memcache, compression


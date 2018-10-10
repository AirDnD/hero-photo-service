# AirDnD - Hero Photo Service Systems Design

> Systems Design project with a goal of hitting at least 1000 requests per second once uploaded onto AWS and load balanced.

## Related Projects

  - https://github.com/airDnD/reservation-service
  - https://github.com/airDND/about-Service
  - https://github.com/airDND/CustomerReview

## Table of Contents

1. [Requirements](#requirements)
2. [Installation](#development)

## Usage

> 

## Requirements

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
npm run react-dev

within the database directory, run schema.sql then run Populator.js to populate the database.
```
## API Routes

Method: POST /listings/${this.state.listingId}/photos adds a new entry to the photos table which will save a new photo_id and have a description and url as well as foreign key listing_id that references the id in the listings table

Method: GET /listings/${this.state.listingId}/photos gets the photos from the photos table based on what listing id is passed in

Method: PUT /listings/${this.state.listingId}/photos updates the contents of the photo table based on the photo id given. it's likely either the url or description will be updated.

Method: DELETE /listings/${this.state.listingId}/photos deletes a photo record from the photos table which includes the id, description, listing id and url.
 


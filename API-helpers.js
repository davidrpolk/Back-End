const axios = require("axios");
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY;
const googleMapsClient = require('@google/maps').createClient({
    key: GOOGLE_MAPS_API_KEY,
    Promise: Promise
  });

const getNearbyPlaces = (location) => {
    const options = {
      location,
      radius: 1,
    }
    return googleMapsClient.places(options).asPromise();
}

module.exports.getNearbyPlaces = getNearbyPlaces;
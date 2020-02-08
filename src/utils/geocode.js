const request = require("request");

/**
 * * Makes the request to darksky
 */

const geoCode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1IjoiZGFuaWVsY29zdGVpcmEiLCJhIjoiY2s2NDF3Znp4MHBueTNlbzQ1N3pzOTlodiJ9.t5CpLUVwj3nY0RCrB4seJw&limit=1";

  request({
    url,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      callback("Unable to connect geocoding service!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location! Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
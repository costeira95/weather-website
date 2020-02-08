const request = require("request");

/**
 * * Makes the request to darksky
 */

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/fcd0e9109e0c842ec27259bbac66b35b/" + latitude + "," + longitude + "?units=si";

  request({
    url,
    json: true
  }, (error, {
    body
  }) => {
    if (error) {
      callback("Unable to connect weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(undefined, body.daily.data[0].summary + "It is currently " + body.currently.temperature + " degress out. There is a " + body.currently.precipProbability + "% chance of rain.");
    }
  });
}

module.exports = forecast;
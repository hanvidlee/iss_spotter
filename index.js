const { fetchMyIP } = require('./iss');
const { fetchCoordsByIp } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');
const coords = { lat: 43.8828401, long: -79.4402808 };

const printPassTimes = function(responses) {
  for (const response of responses) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(response.risetime);
    const duration = response.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};


nextISSTimesForMyLocation((error, responses) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(responses);
});

module.exports = {printPassTimes}
// fetchISSFlyOverTimes(coords, (error, responses) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log(`It worked! Return flyover times:`, responses);
// });
// const ip = "99.228.108.140";
// fetchCoordsByIp(ip, (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });
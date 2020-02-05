if(process.argv.length < 4){
	console.error("error : no keys");
	process.exit(-1);
}

const request = require('request');
const key_d = process.argv[2];
const key_m = process.argv[3];

const url = 'https://api.darksky.net/forecast/'+key_d+'/37.8267,-122.4233';

request({ url: url, json: true }, (error, response) => {
    console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.');
})

// Geocoding
// Address -> Lat/Long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token='+key_m+'&limit=1';

request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search.');
    } else {
        const latitude = response.body.features[0].center[0];
        const longitude = response.body.features[0].center[1];
        console.log(latitude, longitude);
    }		
})

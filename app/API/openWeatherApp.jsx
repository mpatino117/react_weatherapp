var axios = require('axis');

const Open_Weather_APP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=1bdf145b850fa89fc8af865978a5244b&units=imperial';


//http://api.openweathermap.org/data/2.5/weather?appid=1bdf145b850fa89fc8af865978a5244b&units=imperial
//api code == 1bdf145b850fa89fc8af865978a5244b

module.exports = {
	getTemp : function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestURL = '${Open_Weather_APP_URL}&q=${encodedLocation}';

	}
}
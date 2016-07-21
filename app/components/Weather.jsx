var React = require('react');
var {Link} = require('react-router');
var WeatherForm = require('WeatherForm');
var Weathermessage = require('Weathermessage');

var Weather = React.createClass({
	getInitialState: function(){
		return {
			location : "Miami",
			temp : 20
		}
	},
	// handleSearch : function(location){
	// 	this.setState({
	// 		location: location,
	// 		temp: 120
	// 	});
	// },
    render: function() {

        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                <Weathermessage location={this.state.location} temp={this.state.temp} />
            </div>
        );

    }
});

module.exports = Weather;

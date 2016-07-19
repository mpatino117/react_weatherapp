var React = require('react');
var {Link} = require('react-router');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Weather component</h1>
                <WeatherForm />
            </div>
        );

    }
});

module.exports = Weather;

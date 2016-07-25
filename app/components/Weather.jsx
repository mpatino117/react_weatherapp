var React = require('react');
var WeatherForm = require('WeatherForm');
var Weathermessage = require('Weathermessage');
var OpenWeatherApp = require('OpenWeatherApp');




var Weather = React.createClass({
    getInitialState: function() {
        return {
          isLoading: false
        }
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
          isLoading: true
        });

        OpenWeatherApp.getTemp(location).then(function(temp) {
            that.setState({
              location: location,
               temp: temp,
               isLoading: false
             });
        }, function(errorMessage) {
            that.setState({
              isLoading: true
            });
            alert(errorMessage);
        });
    },
    render: function() {
        var {temp, location, isLoading} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3>Is Loading......</h3>;
            } else if (temp && location) {
                return <Weathermessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        );

    }
});

module.exports = Weather;

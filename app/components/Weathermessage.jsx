var React = require('react');

var WeatherMessage = (props) => {

  return (
    <h3>It's it {props.temp} in {props.location}.</h3>

  )
}

module.exports = WeatherMessage;

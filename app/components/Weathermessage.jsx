var React = require('react');
var {Link} = require('react-router');

var Weathermessage = React.createClass({
	
    render: function() {
        return (
            <div>
                <h2>Location:</h2>{this.props.location} 
                <h2>Temperature:</h2> {this.props.temp}
            </div>
        );

    }
});

module.exports = Weathermessage;

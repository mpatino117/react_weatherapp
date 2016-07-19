var React = require('react');
var {Link} = require('react-router');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About component</h1>
                <Link to="/">
                    Lets go back
                </Link>
            </div>
        );

    }
});

module.exports = About;

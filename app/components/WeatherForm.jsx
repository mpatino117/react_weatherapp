var React = require('react');


var Weatherform = React.createClass({
    render: function() {

        return (
            <div>
                <form>
                    <input type="text"></input>
                    <button>Get Weather</button>

                </form>
            </div>
        );
    }
});


module.exports = Weatherform;

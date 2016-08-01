var React = require('react');
var {Link} = require('react-router');

var About = (props) => {
    return (
        <div>
            <h1>About Component</h1>
            <p>This is a Weather Application built with React. I have built this following a React Course</p>
            <ol>
              <li>
                  <a href='https://facebook.github.io/react/'> React framework-</a>
                  <p> This is the Javascript framework used.</p>
              </li>
              <li>
                  <a href='http://openweathermap.org/api'>Weather API-</a>
                  <p> This is the Open Weather Api used.</p>
              </li>

            </ol>

        </div>

    )
}
module.exports = About;

var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1>
                Examples Component
            </h1>
            <p>
                Here are a few Examples try it out
            </p>
            <ol>
              <li>
                  <Link to='/?location=Seattle'>Seattle, WA </Link>
              </li>
              <li>
                <Link to='/?location=Philadelphia'>Philadelphia, PA </Link>
              </li>
            </ol>
        </div>
      )
    }
    module.exports = Examples;

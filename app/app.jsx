var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, Link} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <Route path="example" component={Examples} />
      <Route path="about" component={About} />
      <IndexRoute component={Weather}/>
    </Route>
  </Router>, document.getElementById('app'));

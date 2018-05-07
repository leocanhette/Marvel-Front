const React = require('react');
const ReactDOM = require('react-dom');

const Home = require('Home');
const HeroContainer = require('HeroContainer');
const About = require('About');

const { Route, Router, IndexRoute, hashHistory } = require('react-router');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={HeroContainer} />
      <Route path="about" component={About} />
    </Route>
  </Router>,
    document.getElementById('app')
);

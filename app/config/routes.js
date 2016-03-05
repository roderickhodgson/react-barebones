var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require("../components/Main");
var Home = require("../components/Home");
var Undefined = null;

var routes = (
  <Router>
    <Route path="/" component={Main}>
      <IndexRoute component={Home} />
      <Route path="/undefined" component={Undefined} />
    </Route>
  </Router>
)

module.exports = routes;

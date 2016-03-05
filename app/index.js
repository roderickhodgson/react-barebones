var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
  render: function() {
    return (
      <div>
        <p>Hello {this.props.name}!</p>
       </div>
    )
  }
});

ReactDOM.render(<HelloWorld name="Rod"/>, document.getElementById('app'));

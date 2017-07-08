// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Results = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="col-lg-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Results</h3>
            </div>
            <div className="panel-body">
              <p>Here are your Results!</p>

              {/* This code will allow us to automatically dump the correct GrandChild component */}
              {this.props.children}
              
            </div>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = Results;

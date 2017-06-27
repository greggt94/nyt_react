// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div class="container">
          <div class="jumbotron">
              <h2><strong>New York Times Article Scrubber</strong></h2>
              <p>Search for articles!</p>
              <div class="btn-group" role="group" aria-label="...">
                <button type="button" class="btn btn-default">Search</button>
                <button type="button" class="btn btn-default">Results</button>
                <button type="button" class="btn btn-default">Saved</button>
              </div>
          </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Saved = React.createClass({
  render: function() {
    return (
      <div class="row">
          <div class="col-xs-12">
              <div class="panel panel-primary">
                  <div class="panel-heading">
                      <h3 class="panel-title">Saved Articles</h3>
                  </div>
                  <div class="saved-articles">
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = Saved;

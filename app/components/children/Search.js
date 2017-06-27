// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Search = React.createClass({
  render: function() {
    return (
      <div class="col-xs-12">
          <div class="panel panel-primary">
              <div class="panel-heading">
                  <h3 class="panel-title">Search</h3>
              </div>
              <div class="panel-body">
                  <div class="panel panel-success">
                      <div class="panel-heading">
                          <h3 class="panel-title">Topic</h3>
                      </div>
                      <div class="panel-body">
                          <div class="container-fluid">
                              <div class="input-group col-sm-12">
                                  <input type="text" class="form-control" placeholder="Search for a Topic"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="panel panel-success">
                      <div class="panel-heading">
                          <h3 class="panel-title">Start Year</h3>
                      </div>
                      <div class="panel-body">
                          <div class="container-fluid">
                              <div class="input-group col-sm-12">
                                  <input type="text" class="form-control" placeholder="Start Year"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="panel panel-success">
                      <div class="panel-heading">
                          <h3 class="panel-title">End Year</h3>
                      </div>
                      <div class="panel-body">
                          <div class="container-fluid">
                              <div class="input-group col-sm-12">
                                  <input type="text" class="form-control" placeholder="End Year"/>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="btn-group">
                      <button type="button" class="btn btn-info">Search</button>
                  </div>
              </div>
          </div>
      </div>
    );
  }
});

module.exports = Search;

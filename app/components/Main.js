// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">
        <div className="jumbotron">
          <h2><strong>NYT Article Viewer</strong></h2>
          <p><em>View articles from the New York Times right here!</em></p>
          <hr />
          <p>
            <Link to="/Results"><button className="btn btn-primary btn-lg">Results</button></Link>
            <Link to="/Saved"><button className="btn btn-danger btn-lg">Saved</button></Link>
          </p>
        </div>
        
        <div className="row">

          {/* This code will dump the correct Child Component */}
          {this.props.children}

        </div>

        <div className="col-xs-12">
          <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Search</h3>
            </div>
            <div className="panel-body">
              <div className="panel panel-success">
                  <div className="panel-heading">
                      <h3 className="panel-title">Topic</h3>
                  </div>
                  <div className="panel-body">
                      <div className="container-fluid">
                          <div className="input-group col-sm-12">
                              <input type="text" className="form-control" placeholder="Search for a Topic"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="panel panel-success">
                  <div className="panel-heading">
                      <h3 className="panel-title">Start Year</h3>
                  </div>
                  <div className="panel-body">
                      <div className="container-fluid">
                          <div className="input-group col-sm-12">
                              <input type="text" className="form-control" placeholder="Start Year"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="panel panel-success">
                  <div className="panel-heading">
                      <h3 className="panel-title">End Year</h3>
                  </div>
                  <div className="panel-body">
                      <div className="container-fluid">
                          <div className="input-group col-sm-12">
                              <input type="text" className="form-control" placeholder="End Year"/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="btn-group">
                  <Link to="/Results"><button className="btn btn-info">Search</button></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;

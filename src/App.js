import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Homepage from 'components/Homepage';


import './App.css';
import './fonts.css';

class App extends Component {
  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/Homepage">Homepage</Link>
              <Link to="/SelfProject">SelfProject</Link>
                          
            </div>
          </Route>

          <Route exact path="/Homepage" component={Homepage} />
        </Switch>
      </Router>
    );
  };
};

export default App;

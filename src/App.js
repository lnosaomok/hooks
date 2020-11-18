import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import UseEffect from "./UseEffect";
import UseState from "./UseState";
import UseRef from "./UseRef";
import "materialize-css/dist/css/materialize.min.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={UseState} />

            <Route exact path='/useState' component={UseState} />
            <Route exact path='/useRef' component={UseRef} />
            <Route exact path='/useEffect' component={UseEffect} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;

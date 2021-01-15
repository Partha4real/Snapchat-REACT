import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WebcamCapture from './components/WebcamCapture';
import Preview from './components/Preview';

function App() {
  return (
    <div className="app">
       <Router>
      <div className="app__body">
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <WebcamCapture />
          </Route>
          <Route exact path="/preview">
            <Preview />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

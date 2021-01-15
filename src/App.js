import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import WebcamCapture from './components/WebcamCapture';
import Preview from './components/Preview';
import Chats from './components/Chats';
import ChatView from './components/ChatView';
import Login from './components/Login';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username:authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid
        }))
      } else {
        dispatch(logout())
      }
    })
  })

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <img className="app__logo" src="https://variety.com/wp-content/uploads/2017/11/snapchat-logo.jpg" alt="" />
            <div className="app__body">
              <div className="app__bodyBackground">
                 {/* A <Switch> looks through its children <Route>s and
                  renders the first one that matches the current URL. */}
                <Switch>
                  <Route exact path="/">
                    <WebcamCapture />
                  </Route>
                  <Route exact path="/preview">
                    <Preview />
                  </Route>
                  <Route exact path="/chats">
                    <Chats />
                  </Route>
                  <Route exact path="/chats/view">
                    <ChatView />
                  </Route>
                </Switch>
              </div>
            </div>
          </>
          )}
          
        </Router>
      </div>
  );
}

export default App;

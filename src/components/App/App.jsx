import React from "react";
import axios from "axios";
import "./App.css";
import Feeling from "../Feeling/Feeling.jsx";
import Understanding from "../Understanding/Understanding.jsx";
import Supported from "../Supported/Supported.jsx";
import Comments from "../Comments/Comments.jsx";
import Review from "../Review/Review.jsx";
import Success from "../Success/Success.jsx";
import { HashRouter as Router, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <div>
          <Route exact path="/">
            <Feeling />
          </Route>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
          <Route exact path="/supported">
            <Supported />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;

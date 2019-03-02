import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import ExplorePage from "./components/ExplorePage/ExplorePage";

function App() {
  return (
    <Router>
    <div>
       <Route exact path="/" component={LandingPage} />
       <Route exact path="/explore" component={ExplorePage} />
      
    </div>
    </Router>
  );
}

export default App;

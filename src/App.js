import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import CollegeByStates from "./components/pages/CollegeByStates/CollegeByStates";
import CollegeByCourses from "./components/pages/CollegeByCourses/CollegeByCourses";
import CompleteCollege from "./components/pages/CompleteCollege/CompleteCollege";

import College from "./components/College";
import Navbar from "./components/Navbar";
import Home from "./components/pages/HomePage/Home";
import NotFound from "./components/pages/NotFound/NotFound";
import InsideCollege from "./components/pages/InsideCollege/InsideCollege";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/college" component={College} />
        <Route path="/collegebystate" component={CollegeByStates} />
        <Route path="/collegebycourse" component={CollegeByCourses} />
        <Route path="/completecollege" component={CompleteCollege} />
        <Route path="/insidecollege" component={InsideCollege} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

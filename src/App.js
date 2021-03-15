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
        <Route path="/OS_FE" exact component={Home} />
        <Route path="/OS_FE/college" component={College} />
        <Route path="/OS_FE/collegebystate" component={CollegeByStates} />
        <Route path="/OS_FE/collegebycourse" component={CollegeByCourses} />
        <Route path="/OS_FE/completecollege" component={CompleteCollege} />
        <Route path="/OS_FE/insidecollege" component={InsideCollege} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;

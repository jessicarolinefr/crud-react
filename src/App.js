import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Schedule from "./pages/addSchedule";
import Header from "./components/header";
import Home from "./pages/home";
import Admin from "./pages/admin";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={["/", "/schedules"]} component={Home} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/patient" component={Schedule} />
        <Route path="/edit/schedules/:id" component={Schedule} />
      </Switch>
    </Router>
  );
}

export default App;

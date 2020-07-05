import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import AddTrucker from "./components/trucker";
import List from "./components/listTrucker";
import Header from "./components/header";
import EditTrucker from "./components/editTrucker";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <div>
          <Switch>
            <Route exact path={["/", "/truckers"]} component={List} />
            <Route exact path="/add" component={AddTrucker} />
            <Route path="/edit/trucker/:id" component={EditTrucker} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

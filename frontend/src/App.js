import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, } from "react-router-dom";
import NavBar from "./NavBar.js";
import HomePage from "./pages/HomePage.js";
import FIPage from "./pages/FIPage.js";
import DebtPage from "./pages/DebtPage.js";
import PlanPage from "./pages/PlanPage.js";
import AboutPage from "./pages/AboutPage.js";
import BillsPage from "./pages/BillsPage.js";
import AssetsPage from "./pages/AssetsPage.js";
import SalaryPage from "./pages/SalaryPage.js";
import SpendingPage from "./pages/SpendingPage.js";
import InvestmentsPage from "./pages/InvestmentsPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div
            id="page-body"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/fi" component={FIPage} />
              <Route path="/plan" component={PlanPage} />
              <Route path="/debt" component={DebtPage} />
              <Route path="/bills" component={BillsPage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/assets" component={AssetsPage} />
              <Route path="/salary" component={SalaryPage} />
              <Route path="/spending" component={SpendingPage} />
              <Route path="/investments" component={InvestmentsPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

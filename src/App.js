import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
            <Route path="/" component={HomePage} exact />
            <Route path="/fi" component={FIPage} exact />
            <Route path="/plan" component={PlanPage} exact />
            <Route path="/debt" component={DebtPage} exact />
            <Route path="/bills" component={BillsPage} exact />
            <Route path="/about" component={AboutPage} exact />
            <Route path="/assets" component={AssetsPage} exact />
            <Route path="/salary" component={SalaryPage} exact />
            <Route path="/spending" component={SpendingPage} exact />
            <Route path="/investments" component={InvestmentsPage} exact />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

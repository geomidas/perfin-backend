import React from "react";

const HomePage = () => (
  <React.Fragment>
    <h1>My Personal Finance</h1>
    <div
      id="page-body"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h2>This app allows you to</h2>
      <li>Track your monthly salary</li>
      <li>Plan your monthly money allocation</li>
      <li>Track your monthly debt repayments</li>
      <li>Track your investments</li>
      <li>Track your assets and net worth</li>
      <li>Plan long term strategy towards financial independence</li>
    </div>
  </React.Fragment>
);
export default HomePage;

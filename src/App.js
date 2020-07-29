import React from "react";

import CardDashboard from "./components/Card-Dashboard";

import "./App.css";

function App() {
  return (
    <div className="Container">
      <CardDashboard status="warning" titulo="TOMCAT PRODUÇÃO" />
      <CardDashboard status="stop" />
      <CardDashboard status="start" />
    </div>
  );
}

export default App;

import React from "react";
import "./style.css";
const CardDashboard = (props) => {
  const status = `card-status ${props.status}`;
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-title">{props.titulo}</span>
        <div className={status}></div>
      </div>
      <div className="card-content">
        <slot></slot>
      </div>
    </div>
  );
};

export default CardDashboard;

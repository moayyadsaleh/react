import React from "react";
import ReactDOM from "react-dom";
import"../src/index.css"; //Import Global styles
import './components/styles.css'; // Import component-specific styles

ReactDOM.render(
  <div className="heading">
    <h1>My Favourite Foods</h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
  </div>,
  document.getElementById("root")
);

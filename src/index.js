// Use createRoot instead of ReactDOM.render
//Name HTML attributes with camelCase as if it is JS, example: className
//in the html attributes, Java script can be used to insert, example: <img src={img} > </img>
//React follows Pascal convention naming, the first word is a capital letter
//The Index JS renders the components tree
//JS function can be used as elements(Custom components)

import React from "react";
import { createRoot } from "react-dom/client";
import"../src/index.css"; //Import Global styles
import './components/styles.css'; // Import component-specific styles
import App from './components/App';
import * as Calculator from './mathOperation';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Access functions. Since everything is imported, tap into the exported name . pie.doublepi, etc...

root.render(
    <div>
        <App></App>
        <ul>
    <li>{Calculator.add(1, 2)}</li>
    <li>{Calculator.multiply(2, 3)}</li>
    <li>{Calculator.subtract(7, 2)}</li>
    <li>{Calculator.divide(5, 2)}</li>
  </ul>
    </div>
);


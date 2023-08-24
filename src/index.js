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
import * as pi from "../src/math"; //Import JS functions (import everything as pi)
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Access functions. Since everything is imported, tap into the exported name . pie.doublepi, etc...
console.log(pi);

root.render(
    <div>
        <App></App>
        <ul>
      <li>{pi.default}</li>
      <li>{pi.doublePi()}</li>
      <li>{pi.triplePi()}</li>
    </ul>
    </div>

);


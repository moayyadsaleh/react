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
import './components/App'; // Import component-specific styles
import Heading from "./components/Heading";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);




root.render(
<Heading></Heading>
);

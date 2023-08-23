import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from the correct path
import"../src/index.css"; //Import Global styles
import './components/styles.css'; // Import component-specific styles



const img = "https://picsum.photos/200";
const rootElement = document.getElementById("root");

// Use createRoot instead of ReactDOM.render
//Name HTML attributes with Camel Case as if it is JS, example: className
//in the html attributes, Java script can be used to insert, example: <img src={img} > </img>
const root = createRoot(rootElement);
root.render(
  <div>
    <h1 className="heading" contenteditable="true" spellCheck="true">My Favourite Foods</h1> 
    <p title="I'm a tooltip">This is a paragraph.</p>
    <p lang="fr">Ceci est un paragraphe.</p>
    <p translate="yes">Don't translate this!</p>
<div className="food-image">

<img src={img}></img>
</div>
  </div>
);
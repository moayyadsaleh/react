
import React from "react";
import ReactDOM  from "react-dom";

const creatorName = "Moayyad";
const creationYear = new Date().getFullYear();

ReactDOM.render(<div>
<p>created by {creatorName}</p>
<p>&copy; {creationYear}. All rights reserved.</p>
</div>, document.getElementById("root"))
//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
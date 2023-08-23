import React from"react";
import ReactDom from"react-dom";

const firstName = "Moayyad";
const lastName  = "Saleh";
const luckyNumber = 7;
ReactDom.render(<div>
<h1>Hello {`${firstName} ${lastName}`}</h1>
<p>Your luck number is {Math.floor(Math.random() * 10)}</p>
</div>, document.getElementById("root"));
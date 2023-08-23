import React from 'react';
import ReactDOM from "react-dom";
//Inject HTML code inside JS code.
//React uses Babel complier that changes the react code and next Generation JS into Vanilla JS so that any browser can process the code
ReactDOM.render(<div><h1>Hello World</h1><p>This is a paragraph</p></div>, document.getElementById("root"));

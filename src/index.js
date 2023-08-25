// Use createRoot instead of ReactDOM.render
//Name HTML attributes with camelCase as if it is JS, example: className
//in the html attributes, Java script can be used to insert, example: <img src={img} > </img>
//React follows Pascal convention naming, the first word is a capital letter
//The Index JS renders the components tree
//JS function can be used as elements(Custom components)

import React from "react";
import { createRoot } from "react-dom/client";
import"../src/index.css"; //Import Global styles
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//Create the function, called Card in this case. 
//props are the attributes given to the card in the rendered customized components.
function Card (props) {
  console.log(props)  
return (
  <div>
    <h2>{props.name}</h2>
  <img
    src={props.img}
    alt="avatar_img"/>
  <p>{props.tel}</p>
  <p>{props.email}</p>
  </div>
)
}


root.render(
  <div>
  <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" tel="+123 456 789" email="b@beyonce.com"> </Card>
<Card name="Moayyad Saleh" img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg" tel="123456879"  email="moayyad@gmail.com"></Card>
</div>
);


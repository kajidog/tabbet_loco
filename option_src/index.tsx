import React from "react";
import ReactDom from "react-dom";
const ROOT_ID = "cat_root";
let newContent = document.createTextNode("Hello!");
let newElement = document.createElement("div");
newElement.appendChild(newContent);
newElement.setAttribute("id", ROOT_ID);
document.body.insertBefore(newElement, document.body.lastChild);
ReactDom.render(<div>App</div>, document.getElementById(ROOT_ID));
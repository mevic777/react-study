import React from "react";
import ReactDOM from "react-dom";

const navbar = (
  <div>
    <nav>
      <h1>Website</h1>
      <ul>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  </div>
);

ReactDOM.render(navbar, document.getElementById("root"));

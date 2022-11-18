// Vanilla javascript

// let root = document.getElementById("root");
// let h1 = document.createElement("h1");
// h1.textContent = "I'm learning react";

// h1.classList.add("header");

// root.append(h1);

// React javascript, JSX
// const element = <h1>This is React</h1>;

function MainContent() {
  return (
    <div>
      <h1>This is react function</h1>
      <p>This is react function</p>
    </div>
  );
}

const page = (
  <div>
    <h1>This is react variable</h1>
    <p>This is react variable</p>
  </div>
);

//  Challenge
const navbar = (
  <nav>
    <h1>Website</h1>
    <ul>
      <li>Pricing</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
);

function Navbar() {
  return (
    <nav>
      <h1>Website</h1>
      <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

ReactDOM.render(<Navbar />, document.getElementById("root"));

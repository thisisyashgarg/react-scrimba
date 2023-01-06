import React from "react";
import ReactDOM from "react-dom/client";

// ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));

/**Challenge */
// ReactDOM.render(
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>,
//   document.getElementById("root")
// );

/**Challenge */
// function MainContent() {
//   return <h1>I'm learning React!</h1>;
// }

// // Challenge: Create your own custom React component!
// // Call it "MainContent", and have it return a simple
// // h1 element that says "I'm learning React!"

// // Afterward, render it below the Navbar (which
// // you can do inside the ReactDOM.render call below)

// ReactDOM.render(
//   <div>
//
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

/**Challenge */
/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root  
*/
// const h1 = document.createElement("h1");
// h1.textContent = "this is cool";
// h1.className = "header";
// document.getElementById("root").append(h1);

/* 
Challenge: 
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const NavBar = () => {
//   return (
//     <nav>
//       <h1>Yash's Website</h1>
//       <ul>
//         <li>Menu</li>
//         <li>About</li>
//         <li>Contact</li>
//       </ul>
//     </nav>
//   );
// };

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const MyPage = () => {
//   return (
//     <div>
//       <h1>My awesome website in React</h1>
//       <h3>Reasons I love React</h3>
//       <ol>
//         <li>It's composable</li>
//         <li>It's declarative</li>
//         <li>It's a hireable skill</li>
//         <li>It's actively maintained by skilled people</li>
//       </ol>
//     </div>
//   );
// };

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyPage />);

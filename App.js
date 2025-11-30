/**
 * <div id = "parent">
 *      <div id="child">
 *          <h1><h1>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
    React.createElement("h1", {}, "I'm an h1 tag")
    )
)

/**
 * <div id = "parent2">
 *      <div id="child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 * 
 */

//For sibling create Array
const parent2 = React.createElement("div", {id: "parent"},
    React.createElement("div", {id: "child"},
    [
    React.createElement("h1", {}, "I'm an h1 tag"),
    React.createElement("h2", {}, "I'm an h2 tag")
    ]
    )
)
// If multiple siblings and nesting occurs then it will be difficult for coder to read and understand the code.
// so we use JSX
console.log(parent2);


const heading = React.createElement(
    "h1", {id: "heading" /*gives attributes to the tag*/},
    "Hello World in React !!");

console.log(heading); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2); // converting object to tag
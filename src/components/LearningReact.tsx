// import React from "react";
// import ReactDOM from "react-dom/client";

//React.createElement => ReactElement - JS object => HTMLElement(render)

// React Element
// const heading = React.createElement("h1", { id: "heading" }, "hello world !!");

// JSX (JSX is not html in javascript but it is html like syntax)
//JSX transpilled before it reaches the JS - Parcel - Babel
// JSX => React.createElement

// const jsxHeading = (
//   <h1 id="jsxHeading" className="heading-types">
//     Hello everyone. I'm JSX
//   </h1>
// );
// const jsxHeading2 = (
//   <h1 id="jsxHeading" className="heading-types">
//     Hello everyone. I'm JSX
//   </h1>
// );

// // React Functional Component
// const HeadingComponent = () => {
//   return <h1>Hello, I'm Functional Component</h1>;
// };

// //Other way of writing if function have only return value
// const HeadingComponent2 = () => <h1>Hello, I'm Functional Component</h1>;

// //Other way of writing
// const HeadingComponent3 = () => (
//   <h1 id="head">Hello, I'm Functional Component</h1>
// );

// //Component Composition (one component in other component)
// const HeadingComponent4 = () => (
//   <div id="container">
//     <HeadingComponent3 />
//     <HeadingComponent3></HeadingComponent3>
//     <h1 id="head">Hello, I'm Functional Component</h1>
//   </div>
// );

// const data = 100;

// //One component or one element in other component and element
// const HeadingComponent5 = () => (
//   <div id="container1">
//     {100 + 300}
//     {data}

//     <h1 id="head">Hello, I'm Functional Component</h1>
//   </div>
// );

// //Function inside component
// const HeadingComponent6 = () => (
//   <div id="container">
//     {HeadingComponent3()}
//     <h1 id="head">Hello, I'm Functional Component</h1>
//   </div>
// );

// //Root for react app and render it
// const root = ReactDOM.createRoot(document.getElementById("root")!); //! IS NON NULL ASSERTION (because we already create root element in index.html)
// root.render(<HeadingComponent6 />);

import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import React from "react";
import UserContext from "../utils/UserContext";

// Class Component
//We know in class component we can't use hooks like useState , useEffect , UserContext
// So we use <UserContext.Consumer> to consume the context in class component

class About extends Component {
  constructor(props: any) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    // Used to make API Calls because it renders after the constructor and render then to
    // load the react component first and then Make the API calls so that all the react
    // component won't have to wait for the data to load first
    console.log("component mounted");
  }

  render() {
    console.log("Parent render");

    return (
      <div className="about-page">
        <h1>About Foodie's Haven</h1>

        <div className="">
          <UserContext.Consumer>
            {(data: { loggedInUser: string }) => (
              <h2 className="font-bold">Logged-in User: {data.loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>

        <User name={"Shlok Rastogi from (functional component)"} />

        <UserClass name={"First child"} />
        <UserClass name={"Second child"} />
      </div>
    );
  }
}

const About2 = () => {
  return (
    <div className="about-page">
      <h1>About Foodie's Haven</h1>

      <User name={"Shlok Rastogi from (functional component)"} />

      <UserClass name={"Shlok Rastogi from (class)"} />
    </div>
  );
};

export default About;

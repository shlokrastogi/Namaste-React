import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

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

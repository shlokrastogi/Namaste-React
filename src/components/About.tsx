import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="about-page">
      <h1>About Foodie's Haven</h1>

      <User name={"Shlok Rastogi from (functional component)"} />

      <UserClass name={"Shlok Rastogi from (class)"} />
    </div>
  );
};

export default About;

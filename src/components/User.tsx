import { useState } from "react";

const User = (props: { name: string }) => {
  const [count] = useState(0);

  return (
    <div className="user-name">
      <h1>Count = {count}</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: Delhi</h2>
    </div>
  );
};

export default User;

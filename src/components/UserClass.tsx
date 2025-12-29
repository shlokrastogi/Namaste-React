import React from "react";

// Props type includes initial count
interface UserProps {
  name: string;
}

// State type
interface UserState {
  count: number;
  userInfo: UserInfo;
}

interface UserInfo {
  name: string;
  location: string;
}

class UserClass extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);

    console.log(this.props.name, "constructor");

    this.state = {
      count: 0,

      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  componentDidMount() {
    //when the component will show to the UI
    console.log(this.props.name, "Component did mount");
  }

  componentDidUpdate() {
    console.log("componernt did update");
  }

  componentWillUnmount() {
    //when the component will remove from the UI or we can say that when we go to the new page
    console.log("Component will Unmount");
  }

  //This is how we call api in componentDidMount
  // async componentDidMount() {
  //   const data = await fetch("xyz");
  //   const json = await data.json();

  //     this.setState({
  //         userInfo: json,
  //     })
  //   console.log(json);
  // }

  render() {
    console.log(this.props.name, "render");

    const { name } = this.props;
    const { count } = this.state;

    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Name: {name}</h2>
        {/* <h2>{this.state.userInfo.name}</h2> */}
        <h2>Location: Delhi</h2>
        {/* <h2>{this.state.userInfo.location}</h2> */}
        <h2>Contact: shlok@1934</h2>
      </div>
    );
  }
}

export default UserClass;

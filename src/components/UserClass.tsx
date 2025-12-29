import React from "react";

// Props type includes initial count
interface UserProps {
  name: string;
}

// State type
interface UserState {
  count: number;
}

class UserClass extends React.Component<UserProps, UserState> {
  constructor(props: UserProps) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
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
        <h2>Location: Delhi</h2>
        <h2>Contact: shlok@1934</h2>
      </div>
    );
  }
}

export default UserClass;

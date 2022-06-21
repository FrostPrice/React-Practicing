import React from "react";
import "./Message.css";
import TimeDislpay from "./TimeDisplay";

const Greet = "Hello There!!!";

class Message extends React.Component {
  state = { content: Greet, count: 0 };
  ClickedGameButton = (event) => {
    this.setState({ content: "You're looking good today" });
  };

  ClickedTimeButton = (event) => {
    this.setState({
      content: <TimeDislpay />,
    });
  };

  ChallengeButton = (event) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="contentBox">
        <div className="ui huge header">
          <h1>{this.state.content}</h1>
        </div>
        <div className="button-container">
          <button
            className="positive ui button"
            onClick={(event) => this.ClickedGameButton(event)}
          >
            <h3>Compliment</h3>
          </button>
          <button
            className="negative ui button"
            onClick={(event) => this.ClickedTimeButton(event)}
          >
            <h3>Show Current Time</h3>
          </button>
          <button
            className="positive ui button"
            onClick={() => this.ChallengeButton()}
          >
            <h3>Challenge</h3>
          </button>
        </div>
      </div>
    );
  }
}

export default Message;

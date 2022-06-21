import React from "react";

class TimeDisplay extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => this.CurrentTime(), 1000);
  }

  CurrentTime() {
    this.setState({ time: new Date().toLocaleTimeString() });
  }

  render() {
    return (
      <div>
        <p className="timeContainer">The current time is: {this.state.time}</p>
      </div>
    );
  }
}

export default TimeDisplay;

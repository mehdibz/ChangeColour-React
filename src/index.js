import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

class ChangeColors extends React.Component {
  constructor() {
    super();
    this.state = { color: "black" };
  }
  render() {
    const style = { color: this.state.color };

    const changeColorToRed = () => {
      this.setState({ color: "red"});
    };
    const changeColorToGreen = () => {
      this.setState({ color: "green"});
    };
    const changeColorToBlue = () => {
      this.setState({ color: "blue"});
    };
    return (
      <div>
        <h1 style={style}>Change My Colour!</h1>
        <p>
          <button onClick={changeColorToRed}>Red</button>
          <button onClick={changeColorToBlue}>Blue</button>
          <button onClick={changeColorToGreen}>Green</button>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<ChangeColors />, root);

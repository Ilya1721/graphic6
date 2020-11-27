import React from "react";
import "./css/main.css";
import InputData from "./components/InputData";
import OutputData from "./components/OutputData";

class App extends React.Component {
  taskOne = {
    l: 0.41,
    o: 127,
  };

  taskTwoThree = {
    n: 17,
    k: 4,
    l: 0.71,
    t: 0.98,
    p: 0.52,
  };

  render() {
    return (
      <div className="app">
        <InputData taskOne={this.taskOne} taskTwoThree={this.taskTwoThree} />
        <OutputData taskOne={this.taskOne} taskTwoThree={this.taskTwoThree} />
      </div>
    );
  }
}

export default App;

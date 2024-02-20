import { Component } from "react";
interface State {
  trafficColor: number;
}
export class ClassTrafficLight extends Component {
  state: State = {
    trafficColor: 0,
  };
  changeColor = () => {
    this.setState((current: State) => ({
      trafficColor: (current.trafficColor + 1) % 3,
    }));
  };
  render() {
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          {/* To figure out that interfrace error took 20minutes and now there is eslintrc error */}
          <div
            className={`circle ${
              this.state.trafficColor === 0 ? "red" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.trafficColor === 2 ? "yellow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              this.state.trafficColor === 1 ? "green" : "black"
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.changeColor}>
          Next State
        </button>
      </div>
    );
  }
}

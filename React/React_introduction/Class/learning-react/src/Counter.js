import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        console.log("Counter component is starting to mount to the DOM")
    }

    componentDidMount(){
        console.log("Counter component is mounted to the DOM")
    }

    componentDidUpdate() {
        console.log("Counter component has benn update to the DOM")
    }

    componentWillUnmount(){
        console.log("Counter component is  unmount to the DOM")
    }

  addCounter = () => {
    this.setState((state) => ({
      counter: state.counter + 1,
    }));
  };

  subtractCounter = () => {
    this.setState((state) => ({
      counter: state.counter - 1,
    }));
  };

  resetCounter = () => {
    this.setState((state) => ({
      counter: 0,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.addCounter}>+</button>
        <button onClick={this.subtractCounter}>-</button>
        <button onClick={this.resetCounter}>reset</button>
      </div>
    );
  }
}

export default Counter;

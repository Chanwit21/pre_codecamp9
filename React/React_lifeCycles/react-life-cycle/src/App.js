import "./App.css";
import React from "react";
import Article from "./Article";

class App extends React.Component {
  constructor(props) {
    console.log("[App.js] Constructor");
    super(props);
    this.state = {
      isShow: true,
      article: "Hello My Javascript World",
    };
    // this.onChangeVisible = this.onChangeVisible.bind(this)
  }

  componentDidMount() {
    console.log("[App.js] conponentDidMount");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[APP.js] shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate");
    return { x: 0, y: 0 };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate", snapshot);
  }

  onChangeVisible = () => {
    this.setState((prevState) => ({
      isShow: !prevState.isShow,
    }));
  };

  render() {
    console.log("[App.js] Render");
    return (
      <div className="App">
        <button onClick={this.onChangeVisible}>Show/Hide</button>
        <br />
        <input
          value={this.state.article}
          onChange={(e) => this.setState({ article: e.target.value })}  //ถามพี่ทีมงาน
        />
        {this.state.isShow ? <Article article={this.state.article} /> : null}
      </div>
    );
  }
}

export default App;

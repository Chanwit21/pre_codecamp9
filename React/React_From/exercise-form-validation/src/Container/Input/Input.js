import React, { Component } from "react";

export class Input extends Component {
  getClassCSS = () => {
    let cssClass = "Input InputElement";
    if (this.props.error.status && this.props.error.isTouch) {
      cssClass += " Invalid";
    }
    return cssClass;
  };

  render() {
    return (
      <div>
        <>
          <input
            onChange={this.props.onChangeInput}
            value={this.props.value}
            className={this.getClassCSS()}
            name={this.props.name}
            placeholder={this.props.placeholder}
          />
          <p className="ErrorMessage">{this.props.error.message}</p>
        </>
      </div>
    );
  }
}

export default Input;

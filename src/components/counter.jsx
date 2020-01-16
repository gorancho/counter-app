//imrc+tab shortcut
import React, { Component } from "react";

//cc+tab shortcut
class Counter extends Component {
  state = {
    count: 0
    // imageurl: "https://picsum.photos/200" //generates random 200x200 image
  };

  render() {
    let classes = this.newMethod();

    return (
      <div>
        {/* <img src={this.state.imageurl} alt="" /> */}
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  newMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;

//imrc+tab shortcut
import React, { Component } from "react";

//controled component does not have its own local state.
//it receives all the data by a props and rises events whenever data needs to be changed
//this component is entirely controlled by its parent
//cc+tab shortcut
class Counter extends Component {
  // state = {
  // value: this.props.counter.value
  // tags: ["tag1", "tag2", "tag3"]
  // imageurl: "https://picsum.photos/200" //generates random 200x200 image
  // };

  //   constructor() {
  //     super();
  //     //functions in javascript are objects
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // arrow functions dont rebind this - they inherit it.

  //conditional rendering
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //event handler
  //you must create a constructor for Counter if you uste this syntax,
  //   or you can user arrow functions
  //   handleIncrement() {
  //     console.log("Increment Clicked", this);
  //   }

  //you dont need to rebind event handler manually
  // handleIncrement = () => {
  //   console.log("Increment Clicked", this);
  //   // this.state.count++;
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    return (
      <div>
        {/* {this.props.children} */}
        {/* <img src={this.state.imageurl} alt="" /> */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
      </div>
    );
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;

import React, { Component } from "react";

class LifecycleComponent extends Component {
  //initialization
  constructor() {
    super(); //used to call parent constructor
    // this is referring to LifecycleComponent
    this.state = {
      name: "harry",
    };
  }

  //   Mouting
  // (dep)
  //   componentWillMount = () => {

  //   }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerived" + state.name);
    // this.setState({
    //     name: 'alina'
    // })
    return state.name;
  }

  componentDidMount = () => {
    //api calls
    console.log("component did mount");
  };

  //   Updation
  handleClick = () => {
    this.setState({
      name: "alina",
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("should component update", nextState.name);
    // if()
    return true;
  };

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("get snapshot" + prevState.name);
    return "get snapshot";//it returns to third parameter of componentDidUpdate
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(snapshot, prevState.name);
  };

  render() {
    return (
      <div>
        {this.state.name}
        <button onClick={this.handleClick}>Update</button>
      </div>
    );
  }
}

export default LifecycleComponent;

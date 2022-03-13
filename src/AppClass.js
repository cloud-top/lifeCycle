import React, { Component } from "react";

export default class AppClass extends Component {
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return <div>AppClass</div>;
  }
}

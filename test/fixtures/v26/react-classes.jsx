import React from "react";

export class First extends React.Component {
  componentDidMount() {
    this.setState({ ready: true });
  }

  render() {
    return <div ref="example" />;
  }
}

export class Second extends React.Component {
  render() {
    return <span />;
  }
}

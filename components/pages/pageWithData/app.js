import React, { Component } from "react";
import BasicLayout from "../../layouts/Basic";

function fetchGreeting(country) {
  if (country === "USA") {
    return Promise.resolve("Hello");
  }
  if (country === "France") {
    return Promise.resolve("Bonjour");
  }
  if (country === "Mexico") {
    return Promise.resolve("Hola");
  }
  return Promise.resolve("Hi");
}

export default class MyPage extends Component {
  static async initializeProps(props) {
    const greeting = await fetchGreeting(props.country);
    return { ...props, greeting };
  }

  static isStatic = true;

  render() {
    const { greeting, name } = this.props;

    return (
      <BasicLayout>
        <div>
          {greeting}, {name}!
        </div>
      </BasicLayout>
    );
  }
}

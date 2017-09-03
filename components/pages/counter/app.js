import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import BasicLayout from "../../layouts/Basic";
import asset from "../../common/asset";

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    if (typeof window !== "undefined" && window.__COUNTER_APP_DATA__) {
      console.log("state initializing");
      this.state = window.__COUNTER_APP_DATA__;
    } else {
      // initialize state with initial props passed in
      this.state = {
        count: props.count ? props.count : 0,
        name: props.name ? props.name : ""
      };
    }
  }

  changeName = ev => this.setState({ name: ev.target.value });

  incCount = () => this.setState(({ count }) => ({ count: count + 1 }));
  decCount = () => this.setState(({ count }) => ({ count: count - 1 }));

  render() {
    return (
      <div>
        <div>
          My name is:{" "}
          <input value={this.state.name} onChange={this.changeName} />
          <div>
            Counter: {this.state.count}
            <div>
              <button onClick={this.incCount}>+</button>
              <button onClick={this.decCount}>-</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function Page(props) {
  const initialState = {
    count: props.count ? parseInt(props.count, 10) : 0,
    name: props.name ? props.name : ""
  };
  return (
    <BasicLayout>
      {/* Preload our state */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.__COUNTER_APP_DATA__ = ${JSON.stringify(initialState)};`
        }}
      />
      <script src={asset("pages/counter/build/bundle.js")} />
      <div
        id="app"
        dangerouslySetInnerHTML={{
          __html: renderToString(<CounterApp {...props} />)
        }}
      />
    </BasicLayout>
  );
}

import React, { Component } from "react";
import { renderToString } from "react-dom/server";
import BasicLayout from "../../layouts/Basic";
import asset from "../../common/asset";

export default class CounterApp extends Component {
  constructor(props) {
    super(props);
    // initialize state with initial props passed in
    this.state = {
      count: props.count ? props.count : 0,
      name: props.name ? props.name : ""
    };
  }

  changeName = ev => this.setState({ name: ev.target.value });

  incCount = () => this.setState(({ count }) => ({ count: count + 1 }));

  render() {
    return (
      <div>
        <script src={asset("pages/counter/build/bundle.js")} />
        <div>
          My name is:{" "}
          <input value={this.state.name} onChange={this.changeName} />
          <div>
            Counter: {this.state.count}
            <div>
              <button onClick={this.incCount}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function Page(props) {
  return (
    <BasicLayout>
      <div
        id="app"
        dangerouslySetInnerHTML={{
          __html: renderToString(<CounterApp {...props} />)
        }}
      />
    </BasicLayout>
  );
}

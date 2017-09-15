import React, { Component } from "react";
import BasicLayout from "../../layouts/Basic";
import asset from "../../common/asset";
import InlineScript from "../../common/InlineScript";
import EmbedApp from "../../common/EmbedApp";
import { jsComponent as ReasonCounterApp} from "../../apps/reason-counter/lib/js/src/app";

console.log(ReasonCounterApp);

export default function Page(props) {
  const initialState = {
    count: props.count ? parseInt(props.count, 10) : 0,
    name: props.name ? props.name : ""
  };
  return (
    <BasicLayout>
      {/* Preload our state */}
      {/* <script
        dangerouslySetInnerHTML={{
          __html: `
      window.__COUNTER_APP_DATA__ = ${JSON.stringify(initialState)};`
        }}
      /> */}
      <InlineScript
        body={`window.__COUNTER_APP_DATA__ = ${JSON.stringify(initialState)};`}
      />
      {/* Include the client side bundle */}
      <script src={asset("apps/reason-counter/build/bundle.js")} />
      {/* Render to string (instead of static) so that React can mount
          on the div and reuse the DOM efficiently */}
      {/* <div
        id="app"
        dangerouslySetInnerHTML={{
          __html: renderToString(<ReasonCounterApp {...props} />)
        }}
      /> */}
      <EmbedApp id="app">
        <ReasonCounterApp {...props} />
      </EmbedApp>
    </BasicLayout>
  );
}

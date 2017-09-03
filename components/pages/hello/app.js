import React from "react";

export default function HelloTemplate(props) {
  console.log(props);
  return (
    <html>
      <body>
        <div>Hello, {props.name ? props.name : "world"}!</div>
      </body>
    </html>
  );
}

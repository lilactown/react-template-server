import React from "react";
import { renderToString } from "react-dom/server";

export default function EmbedApp({ id, children }) {
  return (
    <div
      id={id}
      dangerouslySetInnerHTML={{
        __html: renderToString(children)
      }}
    />
  );
}

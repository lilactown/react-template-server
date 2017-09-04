import React from "react";

export default function InlineScript({ body }) {
  return <script dangerouslySetInnerHTML={{ __html: body }} />;
}

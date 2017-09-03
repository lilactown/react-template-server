const express = require("express");
const React = require("react");
const { renderToStaticMarkup, renderToString } = require("react-dom/server");

function getTemplate(path) {
  return require(`./components/pages${path}/server.js`);
}

function render(template, props, isStatic = false) {
  const el = React.createElement(template, props);
  if (isStatic) {
    return renderToStaticMarkup(el);
  }
  return renderToString(el);
}

async function renderHandler(req, res) {
  try {
    const template = getTemplate(req.path);
    console.log(template);
    const props = template.initializeProps
      ? await template.initializeProps(req.query)
      : req.query;

    console.log(props);
    const html = render(template, props, template.isStatic);
    res.send(html);
  } catch (e) {
    console.log(e.stack);
    res.status(500).send(`Error: ${e.message}`);
  }
}

function main(port) {
  const app = express();
  app.get("*", renderHandler);
  app.listen(port);
  console.log(`Listening on ${port}`);
}

main(3030);

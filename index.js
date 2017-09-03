const express = require("express");
const React = require("react");
const { renderToStaticMarkup, renderToString } = require("react-dom/server");

function getTemplate(path) {
  return require(`./components/pages${path}/template.js`);
}

async function renderHandler(req, res) {
  try {
    const template = getTemplate(req.path);

    // sometimes render is async (e.g. we are fetching data)
    const html = await template.render(req.query);
    res.send(html);
  } catch (e) {
    console.log(e.stack);
    res.status(500).send(`Error: ${e.message}`);
  }
}

function main(port) {
  const app = express();
  app.use("/assets", express.static("components"));
  app.get("*", renderHandler);
  app.listen(port);
  console.log(`Listening on ${port}`);
}

main(3030);

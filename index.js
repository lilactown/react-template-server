const express = require("express");


function getTemplate(path) {
  return require(`./components/pages${path}/index.js`);
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

  // example serving of assets; we need this to serve the built
  // client side code. Could (should?) be served by a different
  // system, put here to show off
  app.use("/assets", express.static("components"));

  // mount our renderer
  app.get("*", renderHandler);
  app.listen(port);
  console.log(`Template engine listening on ${port}`);
}

main(3030);

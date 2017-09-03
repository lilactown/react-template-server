const express = require("express");
const ReactEngine = require("react-engine");

function main(port) {
  const app = express();
  const engine = ReactEngine.server.create();
  app.engine(".js", engine);
  app.set("views", __dirname + "/components/pages");
  app.set("view engine", "js");
  app.set("view", require("react-engine/lib/expressView"));

  app.get("*", (req, res) => {
    res.render(req.path.substr(1), req.query);
  });

  app.listen(port);
  console.log(`Listening on ${port}`);
}

main(3030);

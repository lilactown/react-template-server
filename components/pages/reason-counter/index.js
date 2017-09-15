require("babel-register");
require("babel-polyfill");
const { renderToStaticMarkup } = require("react-dom/server");
const Page = require("./Page").default;

module.exports = {
  render(props) {
    return "<!DOCTYPE html>" + renderToStaticMarkup(Page(props));
  }
};

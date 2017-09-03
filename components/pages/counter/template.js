require("babel-register");
require("babel-polyfill");
const { renderToStaticMarkup } = require("react-dom/server");
const Page = require("./app").Page;

module.exports = {
  render(props) {
    return renderToStaticMarkup(Page(props));
  }
};

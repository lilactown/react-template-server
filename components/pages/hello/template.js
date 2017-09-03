require("babel-register");
const { renderToStaticMarkup } = require("react-dom/server");
const Page = require("./app").default;

module.exports = {
  render(props) {
    return renderToStaticMarkup(Page(props));
  }
};
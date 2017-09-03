require("babel-register");
const { renderToStaticMarkup } = require("react-dom/server");
const Page = require("./page").default;

module.exports = {
  render(props) {
    return "<!DOCTYPE html>" + renderToStaticMarkup(Page(props));
  }
};

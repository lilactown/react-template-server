require("babel-register");
require("babel-polyfill");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const Page = require("./page").default;

module.exports = {
  async render(props) {
    const newProps = await Page.initializeProps(props);
    console.log(newProps);
    return (
      "<!DOCTYPE html>" +
      renderToStaticMarkup(React.createElement(Page, newProps))
    );
  }
};

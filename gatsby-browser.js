const React = require("react");
const { globalCss } = require("@stitches/core");
const { AppProvider } = require("./src/context/context");

require("./src/layout/colors.css");
require("@makinox/makinox-ui/dist/index.css");

const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    fontFamily: `'Roboto', 'Open Sans', '-apple-system', BlinkMacSystemFont, "Segoe UI", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      'sans-serif'`,
    fontDisplay: "swap",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    backgroundColor: "rgb(var(--light-surface))",
    color: "rgb(var(--light-onSurface)) !important",
  },

  "h1, h2, h3, h4, h5, h6": {
    "font-family": "Open Sans",
  },
});

function RootElement({ children }) {
  globalStyles();
  return <>{children}</>;
}

exports.wrapRootElement = ({ element }) => (
  <RootElement>
    <AppProvider>{element}</AppProvider>
  </RootElement>
);

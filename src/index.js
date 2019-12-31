import React from "react";
import ReactDOM from "react-dom";

import "./scss/styles.scss";

const App = () => {
  return <div className="btn btn-primary">Hello World</div>;
};

ReactDOM.render(<App />, document.getElementById("app"));

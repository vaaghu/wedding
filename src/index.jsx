import React from "react";
import ReactDOM from "react-dom/client";
import * as serviceWorkerRegistration from "@utils/serviceWorkerRegistration";

class IndexComp extends React.Component {
  render() {
    return <p>sample template</p>;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <IndexComp />
  </div>
);

serviceWorkerRegistration.register();

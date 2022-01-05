import React from "react";
import Routes from "../routes/_index";
import "../../bundles/i18n/ja.js";
import "antd/dist/antd.css";
import "../../../assets/stylesheets/application.css";
import { BrowserRouter } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </>
    );
  }
}

export default Home;

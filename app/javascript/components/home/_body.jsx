import React from "react";
import { Layout } from "antd";
import SideBar from "./_sideBar";
import "../../bundles/i18n/ja.js";
const { Content } = Layout;

class Body extends React.Component {
  // メッセージエリアを非表示する処理
  handleClose = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            ></div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Body;

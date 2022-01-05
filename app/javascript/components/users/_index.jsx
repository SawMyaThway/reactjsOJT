import React from "react";
import { Breadcrumb, Layout } from "antd";
import I18n from "i18n-js";
import "../../bundles/i18n/ja.js";
import SideBar from "../home/_sideBar";
const { Content } = Layout;
class User extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>{I18n.t("home.home")}</Breadcrumb.Item>
              <Breadcrumb.Item>{I18n.t("home.menu1.side1")}</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              This
              <p>flash[:notice]</p>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default User;

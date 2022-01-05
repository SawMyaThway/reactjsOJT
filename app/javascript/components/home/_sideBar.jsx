import React from "react";
import I18n from "i18n-js";
import "../../bundles/i18n/ja.js";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import logo from "../../../assets/images/logo.svg";

const { Sider } = Layout;
const { SubMenu } = Menu;
const rootSubmenuKeys = ["sub1", "sub2"];

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      visible: "",
      logoVisible: "none",
      openKeys: props.openKeys ? props.openKeys : [],
    };
  }

  onCollapse = (collapsed) => {
    if (collapsed) {
      this.setState({ collapsed, visible: "none", logoVisible: "" });
    } else {
      this.setState({ collapsed, visible: "", logoVisible: "none" });
    }
  };

  onOpenChange = (keys) => {
    const latestOpenKey = keys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys: keys });
    } else {
      this.setState({ openKeys: latestOpenKey ? [latestOpenKey] : [] });
    }
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Sider
        style={{ backgroundColor: "#1CB57B" }}
        collapsible
        collapsed={collapsed}
        onCollapse={this.onCollapse}
        width={300}
      >
        <div style={{ display: this.state.logoVisible }}>
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{
              height: "30px",
              marginLeft: "0.5rem",
              width: 100,
            }}
          />
        </div>
        <div style={{ display: this.state.visible }}>
          <img
            src={logo}
            className="logo"
            alt="logo"
            style={{
              height: "64px",
              marginLeft: "1rem",
              width: 150,
            }}
          />
          <p style={{ marginLeft: "1rem", color: "white" }}>example.com</p>
        </div>
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
        >
          <SubMenu
            key="sub1"
            icon={<SettingOutlined />}
            title={I18n.t("home.menu1.title")}
          >
            <Menu.Item key="/users">
              <Link to="/users"> {I18n.t("home.menu1.side1")}</Link>
            </Menu.Item>
            <Menu.Item key="/employees">
              <Link to="/employees"> {I18n.t("home.menu1.side2")}</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}

export default SideBar;

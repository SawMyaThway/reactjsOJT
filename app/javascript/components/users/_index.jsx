import React from "react";
import { Breadcrumb, Layout } from "antd";
import I18n from "i18n-js";
import "../../bundles/i18n/ja.js";
import SideBar from "../home/_sideBar";
import { Form, Input, Button, Checkbox } from "antd";
import axios from "axios";
import UserRegistration from "./_user_reg.jsx";
import UserLogin from "./_user_login.jsx";
const { Content } = Layout;

// const onFinish = (values) => {

//   console.log(values);

//   axios.post("/api/v1/user/create", { values });
// };

// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };
class User extends React.Component {
  onFinish = (values) => {
    console.log(values);

    axios
      .post(`api/v1/user/logintest/${values.email}`, { values })
      .then((response) => {
        console.log("Padfdfdf===============" + response.data.user);
      });
    // axios.post("/api/v1/user/create", { values });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
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
            {/* <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              This
              <p>flash[:notice]</p>
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Name"
                  name="user_name"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Create User"
                  name="create_user"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Update User"
                  name="update_user"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please input your username!" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please input your password!" },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div> */}
            <UserLogin
              onFinish={this.onFinish}
              onFinishFailed={this.onFinishFailed}
            />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default User;

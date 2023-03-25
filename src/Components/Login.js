import { Tabs, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";

const { TabPane } = Tabs;

const LoginSignup = () => {
  const [activeKey, setActiveKey] = useState("login");

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const handleLoginSubmit = (values) => {
    console.log("Login form submitted:", values);
  };

  const handleSignupSubmit = (values) => {
    console.log("Signup form submitted:", values);
  };

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Login" key="login">
          <Form onFinish={handleLoginSubmit}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
        <TabPane tab="Signup" key="signup">
          <Form onFinish={handleSignupSubmit}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input prefix={<UserOutlined />} placeholder="Email" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Signup
              </Button>
            </Form.Item>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default LoginSignup;

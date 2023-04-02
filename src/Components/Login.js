import { Tabs, Checkbox, Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/router";

const { TabPane } = Tabs;

const LoginSignup = () => {
  const [activeKey, setActiveKey] = useState("login");
  const router = useRouter();

  const handleTabChange = (key) => {
    setActiveKey(key);
  };

  const handleLoginSubmit = (values) => {
    // console.log("Login form submitted:", values);
    router.push({ pathname: "/dashboard" });
  };

  const handleSignupSubmit = (values) => {
    console.log("Signup form submitted:", values);
  };

  return (
    <div>
      <Tabs activeKey={activeKey} onChange={handleTabChange}>
        <TabPane tab="Login" key="login">
          <Form className="sn-formcontainer" onFinish={handleLoginSubmit}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                className="sn-input-center"
                prefix={<UserOutlined />}
                placeholder="username: admin or user"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                className="sn-input-center"
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            {/* <Form.Item
              className="snm-txt-left"
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item> */}
            <Form.Item className="snm-formgroup">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="javascript:void(0);">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item className="snm-txt-left">
              <Button className="snm-btn" type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </TabPane>

        <TabPane tab="Signup" key="signup">
          <Form className="sn-formcontainer" onFinish={handleSignupSubmit}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input
                className="sn-input-center"
                prefix={<UserOutlined />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                className="sn-input-center"
                prefix={<UserOutlined />}
                placeholder="Email"
              />
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
                className="sn-input-center"
              />
            </Form.Item>
            <Form.Item className="snm-txt-left">
              <Button className="snm-btn" type="primary" htmlType="submit">
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

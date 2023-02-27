import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Col, Form, Image, Input, Row } from "antd";
import MainLayout from "../../components/Layout";
const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <MainLayout>
      <Row justify="center" align="middle">
        <Col>
          <Image src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" />
        </Col>
      </Row>
      <Row justify="center" style={{ height: "100%" }}>
        <Col xs={24} sm={22} md={20} lg={18} xl={16} xxl={14}>
          <Form
            name="normal_login"
            className="login-form"
            style={{ padding: "20px" }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              {/* <a className="login-form-forgot" href="">
                Forgot password
              </a> */}
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </MainLayout>
  );
};
export default Login;

import { Button, Form, Input } from "antd";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateAuthTokens } from "../../utils";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    if (values.username === "admin" && values.password === "Test@123") {
      const token = generateAuthTokens();
      const currentTime = new Date().getTime();

      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("loggedIn", JSON.stringify(currentTime));

      navigate("/");
    }
  };

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token"));
    if (storedToken) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <div className="loginFormWrapper">
          <h2>Login</h2>
          <Form
            name="basic"
            style={{
              maxWidth: 600,
            }}
            initialValues={{}}
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input name="userName" />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password name="password" />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" size="large" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;

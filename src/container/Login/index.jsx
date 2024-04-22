import { Button, Form, Input } from "antd";
import React, { useState } from "react";

const Login = () => {
  const formLayout = {
    wrapperCol: {
      span: 14,
    },
  };

  const [payload, setPayload] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setPayload({ ...payload, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (payload.userName === "admin" && payload.password === "Test@123") {
      const token = `user_${new Date().getTime()}`;
      sessionStorage.setItem("token", JSON.stringify(token));
    } else {
      setError("Invalid username or password");
    }
    // console.log(token);
  };
  return (
    <div className="loginWrapper">
      <div className="loginContainer">
        <div className="loginFormWrapper">
          <h2>Login</h2>

          {error && (
            <div className="loginerror">
              <span>{error}</span>
            </div>
          )}
          <Form
            name="basic"
            layout={null}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onSubmitCapture={handleSubmit}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
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
              <Input name="userName" onChange={handleChange} />
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
              <Input.Password name="password" onChange={handleChange} />
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


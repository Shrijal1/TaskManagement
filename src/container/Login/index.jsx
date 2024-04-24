import { Button, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { generateAuthTokens } from "../../utils";

const Login = () => {
  const formLayout = {
    wrapperCol: {
      span: 14,
    },
  };

  const navigate = useNavigate();
  const token = sessionStorage.getItem("token");

  console.log("token", token);

  const [searchParams] = useSearchParams();

  const redirect = searchParams.get("redirect")
    ? searchParams.get("redirect")
    : "/";

  const [payload, setPayload] = useState({});
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setError("");
    setPayload({ ...payload, [name]: value });
  };
  const handleSubmit = () => {
    if (payload.userName === "admin" && payload.password === "Test@123") {
      // generateAuthTokens
      const token = generateAuthTokens();
      sessionStorage.setItem("token", JSON.stringify(token));
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

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
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            layout="vertical"
            // onSubmitCapture={handleSubmit}
            onFinish={handleSubmit}
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


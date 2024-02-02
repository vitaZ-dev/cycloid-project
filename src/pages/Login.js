import react from "react";
import { LoginForm, LoginWrap } from "../style/LoginCSS";
import logo from "../images/icon_main.png"
import { Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const nav = useNavigate();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    nav("/");
  };

  return (
    <LoginWrap id="login">
      <img src={logo} alt="logo" />
      <h1>통합로그인</h1>
      <LoginForm>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="아이디"
            rules={[
              {
                required: true,
                message: "아이디를 입력해주세요",
              },
            ]}
          >
            <Input placeholder="아이디" />
          </Form.Item>
          <Form.Item
            name="비밀번호"
            rules={[
              {
                required: true,
                message: "비밀번호를 입력해주세요",
              },
            ]}
          >
            <Input type="password" placeholder="비밀번호" />
          </Form.Item>

          <div className="another-check">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>아이디 저장</Checkbox>
            </Form.Item>
            <Link to="/signup" className="login-form-forgot">회원가입</Link>
          </div>

          <button type="submit">로그인</button>
        </Form>
      </LoginForm>
    </LoginWrap>
  )
}

export default Login;

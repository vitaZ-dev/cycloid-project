import react from "react";
import { LoginWrap } from "../style/LoginCSS";
import logo from "../images/icon_main.png"

const Login = () => {
  return (
    <LoginWrap id="login">
      <img src={logo} alt="logo" />
      <h1>통합로그인</h1>
      <div>
        로그인 폼
      </div>
    </LoginWrap>
  )
}

export default Login;

/*
rgb(3,179,233)
*/
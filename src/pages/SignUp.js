import react, { useEffect, useState } from "react";
import CommonInput from "../components/CommonInput";
import { SignUpWrap } from "../style/SingUpCSS";
import { Checkbox } from 'antd';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPw, setUserPw] = useState("");

  const [check01, setCheck01] = useState(false);
  const [check02, setCheck02] = useState(false);
  const [check03, setCheck03] = useState(false);
  const [check04, setCheck04] = useState(false);
  const checkBoxItem = [
    {
      "check": check01,
      "setCheck": setCheck01,
      "contents": "이용약관 동의"
    },
    {
      "check": check02,
      "setCheck": setCheck02,
      "contents": "개인정보취급방침 동의"
    },
    {
      "check": check03,
      "setCheck": setCheck03,
      "contents": "위치기반 서비스 이용약관 동의"
    },
    {
      "check": check04,
      "setCheck": setCheck04,
      "contents": "이메일, SMS, 알림수신동의 (선택)"
    },
  ]
  const submitSignUp = () => {
    if (!(check01&&check02&&check03)) {
      alert("필수 약관에 동의해주세요");
      return;
    }
    const blankPattern = /^\s*$/;
    if (blankPattern.test(userId)) {
      alert("아이디를 입력해주세요");
      return;
    }
    if (blankPattern.test(userPw)) {
      alert("비밀번호를 입력해주세요");
      return;
    }
    const phonePattern = /^010\d{8}$/;
    if (!phonePattern.test(userPhone)) {
      alert("올바른 형식의 전화번호를 입력해주세요")
      return;
    }
    // check04 ? console.log("선택 항목 체크") : "";
    const userInfo = {
      "id": userId,
      "password": userPw,
      "phone": userPhone,
      "agreement": true,
      "ad_agree": check04,
    }
    console.log(userInfo);
    alert("회원가입이 완료되었습니다")
    nav("/login");
  };

  const [disable, setDisable] = useState(true);
  useEffect(() => {
    const blankPattern = /^\s*$/;
    const idCheck = !blankPattern.test(userId);
    const phoneCheck = !blankPattern.test(userPhone);
    const pwCheck = !blankPattern.test(userPw);
    const infoCheck = idCheck&&phoneCheck&&pwCheck;

    infoCheck && (check01&&check02&&check03) 
      ? setDisable(false) : setDisable(true);
  }, [userId, userPhone, userPw, check01, check02, check03])

  return (
    <SignUpWrap>
      <div className="signup-form">
        <CommonInput
          title="ID"
          type="text"
          value={userId}
          setValue={setUserId}
          placeholder="홍길동"
        />
        <CommonInput
          title="휴대폰 번호"
          type="text"
          value={userPhone}
          setValue={setUserPhone}
          placeholder="01000000000"
        />
        <CommonInput
          title="비밀번호"
          type="password"
          value={userPw}
          setValue={setUserPw}
          placeholder="비밀번호"
        />

        <p>필수 약관 동의</p>
        {checkBoxItem.map((item, idx) => (
          <div className="check-box" key={idx}>
            <Checkbox
              checked={item.check}
              onChange={(e) => item.setCheck(e.target.checked)}
            >
              {item.contents}
            </Checkbox>
            { idx !== 3 ? <span className="show-detail">전문보기</span> : null}
          </div>
        ))}
      </div>

      <button disabled={disable} onClick={submitSignUp}>회원가입 완료하기</button>
    </SignUpWrap>
  )
}

export default SignUp;
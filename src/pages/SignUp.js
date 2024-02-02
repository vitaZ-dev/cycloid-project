import react, { useState } from "react";
import CommonInput from "../components/CommonInput";
import { SignUpWrap } from "../style/SingUpCSS";
import { Checkbox } from 'antd';

const SignUp = () => {
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
  const onChange = (e) => {
    const checked = e.target.checked;
    console.log(`checked = ${checked}`);
    // setValue(checked);
  };
  return (
    <SignUpWrap>
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

      <button>회원가입 완료하기</button>
    </SignUpWrap>
  )
}

export default SignUp;
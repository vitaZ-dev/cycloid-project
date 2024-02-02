import react from "react";
import { CommonInputWrap } from "../style/CommonStyle";

const CommonInput = ({ title, type, placeholder, value, setValue }) => {
  const onChangeValue = (e) => setValue(e.target.value);
  return (
    <CommonInputWrap>
      <p className="title">{title}</p>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChangeValue}
      />
    </CommonInputWrap>
  )
}

export default CommonInput;
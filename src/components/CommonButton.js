import React from "react";
import { CommonBtnWrap } from "../style/CommonStyle";

const CommonButton = ({ text, onClick, btnType = "basic", width, height }) => {
  return (
    <CommonBtnWrap
      onClick={onClick}
      btnType={btnType}
      width={width}
      height={height}
    >
      {text}
    </CommonBtnWrap>
  )
}

export default CommonButton;
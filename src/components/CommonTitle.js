import React from "react";
import { CommonTitleWrap } from "../style/CommonStyle";

const CommonTitle = ({ title }) => {
  return (
    <CommonTitleWrap>
      <h2>{title}</h2>
    </CommonTitleWrap>
  )
}

export default CommonTitle;
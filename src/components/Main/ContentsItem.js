import React from "react";
import { ItemArea } from "../../style/MainCSS";
import bikeImg from "../../images/bike.jpg";
import CommonButton from "../CommonButton";

const ContentsItem = () => {
  return (
    <ItemArea>
      <button className="delete-contents">
        <i className="delete-img"></i>
        <span className="sr-only">컨텐츠 삭제</span>
      </button>
      <img className="item-img" src={bikeImg} alt="바이크 이미지" />
      <p className="item-title">영상1</p>
      <div className="item-type">
        <span>type</span>
        <span>Video</span>
      </div>
      <div className="item-size">
        <span>size</span>
        <span>30 MB</span>
      </div>
      <div className="item-time">
        <span>time</span>
        <span>01:30</span>
      </div>
      <CommonButton text="추가하기" />
    </ItemArea>
  )
}

export default ContentsItem;
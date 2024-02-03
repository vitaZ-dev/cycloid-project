import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../images/cycloid_logo.png";
import { HeaderWrap } from "../style/HeaderCSS";

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <HeaderWrap>
        <h1>
          <img src={logo} alt="CYCLOID-Logo" />
          <span className="sr-only">CYCLOID</span>
        </h1>
        <div className="delete-list">
          삭제 리스트
        </div>
        <button>이미지 & 영상 업로드</button>
      </HeaderWrap>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Header;
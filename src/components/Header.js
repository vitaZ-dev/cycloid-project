import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import logo from "../images/cycloid_logo.png";
import { HeaderWrap } from "../style/HeaderCSS";
import CommonButton from "./CommonButton";

const Header = () => {
  const nav = useNavigate();
  return (
    <>
      <HeaderWrap>
        <h1>
          <Link to="/">
            <img src={logo} alt="CYCLOID-Logo" />
            <span className="sr-only">CYCLOID</span>
          </Link>
        </h1>
        <div className="delete-list">
          <Link to="/delete">
            삭제 리스트
          </Link>
        </div>
        <CommonButton
          text="이미지 & 영상 업로드"
          onClick={() => nav("/upload")}
          width="240px"
        />
      </HeaderWrap>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Header;
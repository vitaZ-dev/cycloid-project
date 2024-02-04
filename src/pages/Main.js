import React from "react";
import { MainWrap } from "../style/MainCSS";
import MainCarousel from "../components/Main/MainCarousel";
import AllContents from "../components/Main/AllContents";

const Main = () => {
  return (
    <MainWrap>
      <MainCarousel />
      <AllContents />
    </MainWrap>
  )
}

export default Main;
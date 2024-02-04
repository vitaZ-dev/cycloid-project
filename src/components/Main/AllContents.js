import React from "react";
import { AllContentsArea } from "../../style/MainCSS";
import CommonTitle from "../CommonTitle";
import ContentsItem from "./ContentsItem";

const AllContents = () => {
  return (
    <AllContentsArea>
      <CommonTitle title="전체 컨텐츠" />
      <div className="all-contents">
        <ContentsItem />
        <ContentsItem />
        <ContentsItem />
        <ContentsItem />
        <ContentsItem />
        <ContentsItem />
      </div>
    </AllContentsArea>
  )
}

export default AllContents;
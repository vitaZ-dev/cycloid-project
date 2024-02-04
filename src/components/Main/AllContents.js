import React from "react";
import useFetch from "../../hooks/useFetch";
import { AllContentsArea } from "../../style/MainCSS";
import CommonTitle from "../CommonTitle";
import ContentsItem from "./ContentsItem";

const AllContents = () => {
  const data = useFetch(`../../DB/db.json`);
  console.log(data);
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
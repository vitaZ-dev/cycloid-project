import styled from '@emotion/styled';
import deleteImg from "../images/trash-can.png";

export const MainWrap = styled.section`
  & > section {
    margin-top: 40px;
    padding: 0 10px 10px;
  }
`;

export const MainCarouselArea = styled.section`
  .width200 {
    width: 200px !important;
  }
`;
export const ItemArea = styled.div`
  position: relative;
  margin: 10px auto;
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .delete-contents {
    position: absolute;
    top: 4px;
    right: 4px;
    margin: 0;
    width: 20px;
    height: 20px;
    .delete-img {
      width: 100%;
      height: 100%;
      display: block;
      background-image: url(${deleteImg});
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  .item-img {
    margin-bottom: 8px;
    width: 100%;
    height: 120px;
  }

  .item-title {
    padding: 6px 4px;
    font-size: 20px;
    font-weight: 700;
  }

  & > div {
    padding: 4px;
    display: flex;
    font-weight: 500;
    line-height: 2;
    & > span {
      flex: 1;
      &:first-of-type {
        text-transform: uppercase;
      }
      &:last-of-type::before {
        content: "-";
        margin-right: 8px;
      }
    }
  }

  button {
    margin-top: 12px;
  }
`;

export const AllContentsArea = styled.section``;
import styled from '@emotion/styled';
import trashImg from "../images/trash-can.png";

export const HeaderWrap = styled.header`
  position: relative;

  .delete-list {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    &::before {
      content: "";
      display: inline-block;
      background: url(${trashImg}) center center;
      background-size: 25px 25px;
      background-position: center;
      width: 25px;
      height: 25px;
      vertical-align: middle;
      margin-right: 4px;
    }
  }
`;
import styled from '@emotion/styled';
import { baseContainer } from './CommonStyle';

export const SignUpWrap = styled.section`
  ${baseContainer};
  p {
    width: 100%;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 700;
    text-align: left;
  }
  .check-box {
    width: 100%;
    padding: 4px;
    display: flex;
    justify-content: space-between;
    .show-detail {
      display: block;
      color: #bbb;
      line-height: 22px;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
import styled from '@emotion/styled';
import { baseContainer } from './CommonStyle';

export const SignUpWrap = styled.section`
  ${baseContainer};
  justify-content: space-around;
  .signup-form {
    width: 100%;
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
  }

  button {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: #03b3e9;
    font-size: 14px;
    color: #f9f9f9;
    font-weight: 500;
      &:disabled,
      &[disabled] {
        background-color: #d8d8d8;
        color: #888;
        cursor: not-allowed;
      }
  }
`;
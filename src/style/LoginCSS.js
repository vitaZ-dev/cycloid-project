import styled from '@emotion/styled';
import { baseContainer } from './CommonStyle';

export const LoginWrap = styled.section`
  ${baseContainer};
  img {
    width: 120px;
    height: 120px;
  }

  h1 {
    font-size: 24px;
    &::before {
      content: 'CYCLOID';
      display: block;
      font-size: 14px;
      font-weight: 500;
      text-align: center;
    }
  }
`;

export const LoginForm = styled.div`
  width: 80%;
  margin-top: 36px;
  .ant-form-item-explain-error {
    padding-left: 8px;
    font-size: 12px;
  }
  .another-check {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }
  button[type=submit] {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background: #03b3e9;
    font-size: 14px;
    color: #f9f9f9;
    font-weight: 500;
  }
`;
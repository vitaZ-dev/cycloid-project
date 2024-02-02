import styled from '@emotion/styled';

export const baseContainer = `
  width: 420px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CommonInputWrap = styled.div`
  width: 100%;
  margin-bottom: 24px;
  font-size: 16px;
  .title {
    margin-bottom: 5px;
    font-weight: 700;
  }
  input {
    width: 100%;
    padding: 8px 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #cfcfcf;
    &:focus {
      border-bottom: 1px solid #ff4d4f;
    }
  }
`;
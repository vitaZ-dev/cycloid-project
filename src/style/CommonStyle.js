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

const basicStyle = `
  width: 100%;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 5px;
  background: #03b3e9;
  font-size: 14px;
  color: #f9f9f9;
  font-weight: 500;
`;
const btnChecked = `
  border: 1px solid #03b3e9;
  background: #fff;
  color: #03b3e9;
  font-weight: 700;
`;
const btnPlay = `
  background: #00c937;
`;

export const CommonBtnWrap = styled.button`
  ${basicStyle}
  ${({ btnType }) => (
    btnType === "basic"
    ? null
    : btnType === "check" ? btnChecked
    : btnType === "play" ? btnPlay : null)
  };
  width: ${({ width }) => (width ?? null )};
  height: ${({ height }) => (height ?? null )};
`;

export const CommonTitleWrap = styled.div`
  margin-bottom: 12px;
  h2 {
    font-size: 24px;
    font-weight: 700;
  }
`;
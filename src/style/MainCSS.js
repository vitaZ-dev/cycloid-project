import styled from '@emotion/styled';

export const MainWrap = styled.section``;

export const MainCarouselArea = styled.div`
  .width200 {
    width: 200px !important;
  }
`;

export const ItemArea = styled.div`
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: center;
  img {
    width: 100%;
    height: auto;
  }

  .item-title {
    padding: 6px 4px;
    font-size: 20px;
    font-weight: 700;
  }
`;
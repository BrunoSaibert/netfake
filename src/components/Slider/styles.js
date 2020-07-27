import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 250px;
  height: calc(100vh / 3);
`;

export const Title = styled.h2`
  padding: 0 4%;
  margin-bottom: 16px;
  color: #e5e5e5;
  font-size: 18px;
  line-height: 24px;
`;

export const Slider = styled.div`
  position: relative;
  padding: 0 4%;

  display: flex;
  justify-content: flex-start;

  & > .card {
    transform: translateX(-30%);
  }

  &:not(:focus-within):not(:hover) {
    .card {
      transform: translateX(0%);
    }
  }
`;

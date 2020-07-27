import styled from 'styled-components';

export const Button = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 4%;
  background: #0000008a;
  border: 0;
  outline: 0;
  padding: 0;
  margin: 2px 0;
  z-index: 4;
  cursor: pointer;

  span {
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &.next {
    right: 0;

    span {
      transform: rotateZ(90deg);
    }
  }

  &.prev {
    left: 0;

    span {
      transform: rotateZ(-90deg);
    }
  }
`;

import styled, { css } from 'styled-components';

import background from '../../assets/hero/dark.jpg';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: url(${background}) no-repeat;
  background-size: cover;

  margin-bottom: -100px;
`;

export const Content = styled.div`
  width: 40%;
  height: 100vh;
  padding: 0 4%;
  background: linear-gradient(90deg, #000 50%, transparent 100%);

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  width: 100%;
  padding-bottom: 16px;
`;

export const InfoList = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 8px;
`;
export const Info = styled.li`
  margin: 4px;

  ${prop =>
    prop.badge &&
    css`
      background: #d7262d;
      padding: 4px;
      border-radius: 4px;
    `}
`;

export const Synopse = styled.p`
  color: #999;
  font-size: 16px;
  line-height: 22px;
  padding-bottom: 16px;
  font-weight: bold;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 30px;
  margin-right: 8px;
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  border: 0;
  border-radius: 4px;
  cursor: pointer;

  background: #fff;
  color: #000;

  ${prop =>
    prop.variant === 'secundary' &&
    css`
      background: rgba(109, 109, 110, 0.7);
      color: #fff;
    `}

  &:hover {
    opacity: 0.7;
  }

  svg {
    margin-right: 8px;
    font-size: 20px;
  }
`;

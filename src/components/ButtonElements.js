import styled from 'styled-components';
// import { Link as LinkR } from 'react-router-dom';
import { Link } from 'react-scroll';
export const Button = styled(Link)`
 border-radius: 50px;
 background: var(--light-accent-color);
 white-space: nowrap;
 padding: 14px 48px;

 color: black;
 font-size: 1.2rem;
 font-weight: bold;
 outline: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;

 &:hover {
  transition: all 0.2s ease-in-out;
  filter: brightness(70%);
 }
`;
export const ButtonR = styled.a`
 border-radius: 50px;
 background: var(--light-accent-color);
 white-space: nowrap;
 padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
 color: ${({ dark }) => (dark ? '#010606' : '#fff')};
 font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
 outline: none;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition: all 0.2s ease-in-out;
 text-decoration: none;
 &:hover {
  transition: all 0.2s ease-in-out;
  filter: brightness(130%);
 }
`;

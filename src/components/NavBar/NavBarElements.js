import styled from 'styled-components';
export const NavBarContainer = styled.nav`
 position: fixed;
 padding: 0;
 top: 0;

 background: linear-gradient(
  180deg,
  rgba(46, 46, 46, 0.9755252442773985) 0%,
  rgba(49, 49, 49, 0.7010154403558299) 52%,
  rgba(73, 67, 67, 0) 100%
 );

 right: 0;
 min-width: 100%;
 z-index: 10;

 img {
  position: relative;
  top: 0rem;
  left: 5rem;
  height: 150px;
  opacity: 1;
  transition: opacity 0.2s linear;
 }
`;

export const HamburgerMenu = styled.div`
 position: absolute;
 top: 1rem;
 right: 3rem;
 height: 4rem;
 width: 3rem;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: flex-end;
 :hover {
  filter: brightness(80%);
 }
`;
export const Bar = styled.div`
 width: 1.9rem;
 height: 3px;
 border-radius: 2px;
 background-color: var(--light-accent-color);
 transition: 0.5;
 position: relative;
 &:before,
 :after {
  content: '';
  position: absolute;
  width: inherit;
  height: inherit;
  background: var(--light-accent-color);
  transition: 0.5s;
 }
 &:before {
  transform: translateY(-9px);
 }
 &:after {
  transform: translateY(9px);
 }
`;

import styled from 'styled-components';
export const Container = styled.div`
 min-height: 100vh;

 width: 100%;
 background: rgb(0, 0, 0);
 background: linear-gradient(315deg, rgba(0, 0, 0, 0.9900911048012955) 23%, rgba(73, 67, 67, 1) 83%);
 overflow: hidden;
 transform-style: preserve-3d;
 &.active .nav {
  img {
   transition: all 0.2s ease-in-out;
   opacity: 0;
  }
 }
 &.active {
  position: fixed;

  top: 0;
  left: 0;
 }
 &.active .bar {
  transform: rotate(180deg);
  background-color: transparent;
 }
 &.active .bar:before {
  transform: translateY(0) rotate(45deg);
 }
 &.active .bar:after {
  transform: translateY(0) rotate(-45deg);
 }

 &.active .links-container li {
  animation: appear 0.5s forwards ease 0.2s;
 }
 @keyframes appear {
  0% {
   opacity: 0;
  }
  100% {
   opacity: 1;
  }
 }
`;
export const NavBar = styled.nav`
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
export const NavInterface = styled.div`
 width: 100%;
`;
export const LinksContainer = styled.div`
 position: absolute;
 width: 30%;
 right: 0;
 top: 0;
 height: 100vh;
 z-index: 2;
 display: flex;
 align-items: center;
 justify-content: center;
 ul {
  list-style: none;
 }
 li {
  color: var(--light-accent-color);
  padding: 0.7rem 0;

  font-size: 1rem;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  opacity: 0;
  transform: translateY(10px);
  animation: hide 0.5s forwards ease;
  @keyframes hide {
   0% {
    opacity: 1;
   }
   100% {
    opacity: 0;
   }
  }

  :hover {
   filter: brightness(80%);
   transform: translateY(-2px);
   cursor: pointer;
  }
  &.active {
   transform: scale(1.1);
   font-weight: 600;
  }
 }
`;

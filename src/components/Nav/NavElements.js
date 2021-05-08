import styled from 'styled-components';
export const Container = styled.div`
 min-height: 100vh;
 width: 100%;
 background: rgb(0, 0, 0);
 background: linear-gradient(315deg, rgba(0, 0, 0, 0.9900911048012955) 23%, rgba(73, 67, 67, 1) 83%);
 overflow: hidden;
 transform-style: preserve-3d;

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
 &.active .main {
  animation: main-animation 0.5s ease;
  transform: perspective(1300px) translateZ(310px) rotateY(20deg) scale(0.5);
  cursor: pointer;
  left: 10%;
 }
 @keyframes main-animation {
  0% {
   transform: translate(0);
  }
  100% {
   transform: perspective(1300px) translateZ(310px) rotateY(20deg) scale(0.5);
  }
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
 top: 0;
 left: 0;
 width: 100%;
 z-index: 10;
 height: 3rem;
`;
export const Menu = styled.div`
 max-width: 72rem;
 width: 100%;

 margin: 0 auto;
 padding: 0 2rem;

 display: flex;
 justify-content: space-between;
 align-items: center;
 color: white;
`;
export const HamburgerMenu = styled.div`
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
  /* display: inline-block; */
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
 }
`;

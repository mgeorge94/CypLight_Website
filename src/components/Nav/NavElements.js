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
 .links-container {
  z-index: -1;
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

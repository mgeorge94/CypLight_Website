import styled from 'styled-components';

export const SectionContainer = styled.div`
 height: 100%;
 width: 100%;
`;
export const IndividualSection = styled.div`
 position: relative;
 width: 100%;
 left: 0;
 z-index: 5;
 background: #2e2e2e;
 overflow: hidden;
 transform-origin: left;
 transform-style: preserve-3d;

 transition: 0.6s;
 &.section.active {
  width: 100%;
  height: 100vh;
  top: 0;
  position: absolute;
  border-radius: 9px;
 }
 &.active.first {
  cursor: pointer;
  /* animation: section-animation 0.5s ease; */
  transform: perspective(1300px) translateZ(310px) rotateY(20deg) scale(0.5);
  cursor: pointer;
  left: 10%;
  /* display: none; */
  z-index: 10;
  transition: 0.6s ease;
  /* background: rbga(2, 9, 83, 0.4); */
 }
 @keyframes section-animation {
  0% {
   transform: translate(0);
  }
  100% {
   transform: perspective(1300px) translateZ(310px) rotateY(20deg) scale(0.5);
  }
 }
 &.active.first:hover + .second {
  transform: perspective(1300px) translateZ(230px) rotateY(20deg) scale(0.5);
 }
 &.active.first:hover {
  transform: perspective(1300px) translateZ(340px) rotateY(20deg) scale(0.5);
 }
 &.active.animated {
  transform: perspective(1300px) translateZ(500px) rotateY(20deg) scale(0.6) translateY(300%);
 }

 &.active.second {
  left: 8%;
  z-index: -1;
  transition: transform 10 ease;
  background: rgba(100, 100, 1, 0.9);
  transform: perspective(1300px) translateZ(215px) rotateY(20deg) scale(0.5);
 }
 &.active.third {
  left: 6%;
  z-index: -3;
  transition: transform 0.5s ease;
  background: rgba(165, 165, 0, 0.534);

  transform: perspective(1300px) translateZ(150px) rotateY(20deg) scale(0.5);
 }
 &.active.fourth {
  left: 4%;
  z-index: -4;
  transition: transform 0.5s ease;

  background: rgba(196, 196, 0, 0.822);
  transform: perspective(1300px) translateZ(110px) rotateY(20deg) scale(0.48);
 }
 &.active.fifth {
  left: 2%;
  z-index: -5;
  transition: transform 0.5s ease;
  background: rgb(255, 255, 0);
  transform: perspective(1300px) translateZ(60px) rotateY(20deg) scale(0.48);
 }
`;

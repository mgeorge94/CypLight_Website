import styled from 'styled-components';
export const SectionContainer = styled.div`
 position: relative;
 width: 100%;
 left: 0;
 z-index: 5;
 background: white;
 overflow: hidden;
 transform-origin: left;
 transform-style: preserve-3d;

 cursor: pointer;
 transition: 0.6s;
 .behind {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;

  z-index: 10;

  transform: ${(active) =>
   active
    ? 'perspective(1300px) translateZ(215px) rotateY(20deg) scale(0.5)'
    : 'perspective(none) translateZ(0px) rotateY(0deg)'};
 }
 transform-style: preserve-3d;
 transform-origin: left;

 .one {
  z-index: -1;
  background: red;
 }
 .two {
  z-index: -2;
 }
`;
export const Header = styled.header`
 min-height: 100vh;
 width: 100%;
 background: red;
 position: relative;
 .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #1f1f1f;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 .inner {
  max-width: 35rem;
  text-align: center;
  color: ffffff;
  padding: 0 2rem;
 }
 .title {
  font-size: 2.7rem;
 }
 .link-btn {
  margin-top: 1rem;
  padding: 0.6rem 1.8rem;
  background: blue;
  border-radius: 15px transparent;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  text-decoration: none;
 }
`;

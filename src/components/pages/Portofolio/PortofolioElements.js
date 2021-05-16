import styled from 'styled-components';
export const ProjectsContainer = styled.section`
 padding-top: 10rem;
 h2 {
  padding-left: 5rem;
  span {
   color: white;
  }
 }
`;
export const Image = styled.img`
 width: 10rem;
 height: 10rem;
 object-fit: cover;
`;
export const GridContainer = styled.div`
 display: grid;
 width: 100%;
 gap: 1.5em;
 padding: 1rem;
 grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
`;
export const GridElement = styled.div`
 overflow: hidden;
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
 animation: popMovieEl 1s ease-in-out forwards;
 position: relative;
 height: 20rem;

 img {
  position: relative;
  min-height: 100%;
  width: 100%;
  object-fit: cover;
 }
 h6 {
  left: 50%;
  transform: translate(-50%);
  font-size: 1.4rem;
  font-weight: bolder;
  padding-top: 5rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  position: absolute;
  color: white;
  background: linear-gradient(
   0deg,
   rgba(10, 10, 10, 0.9755252442773985) 0%,
   rgba(0, 0, 0, 0.5777661406359419) 67%,
   rgba(73, 67, 67, 0) 100%
  );
  width: 100%;
  z-index: 2;
  bottom: 0;
 }
`;

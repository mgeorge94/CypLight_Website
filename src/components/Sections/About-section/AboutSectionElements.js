import styled from 'styled-components';
export const AboutContainer = styled.div`
 display: flex;
 justify-items: space-between;
 align-items: center;
 min-height: 100vh;

 .title {
  margin: 5rem;

  h2 {
   color: white;
  }

  span {
   color: var(--light-accent-color);
   padding-left: 1rem;
  }
  .btn-wrapper {
   display: flex;
  }
 }
 @media screen and (max-width: 900px) {
  flex-direction: column;
 }
`;
export const Description = styled.div`
 display: flex;
 justify-items: center;
 align-items: center;

 @media screen and (max-width: 900px) {
  padding-right: 0rem;
  flex: 1;
 }
`;
export const Image = styled.div`
 width: 40%;
 clip-path: polygon(20% 0, 100% 0, 100% 100%, 0 100%);
 min-height: 100%;
 overflow: hidden;
 margin: auto 0rem;
 display: flex;
 @media screen and (max-width: 900px) {
  clip-path: polygon(0 22%, 100% 0, 100% 100%, 0 100%);
  width: 100%;

  img {
   width: 100vw;
   height: auto;
  }
 }
`;

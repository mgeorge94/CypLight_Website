import styled from 'styled-components';
import { Carousel } from '3d-react-carousal';
export const DetailsContainer = styled.div`
 width: 100%;
 padding: 5rem;
 padding-top: 0;

 h4 {
  padding-bottom: 5rem;
 }
 ol {
  color: white;
  font-size: 1.3rem;
 }
 li {
  padding: 1rem;
 }
 .slider-right {
  div i {
  }
 }
`;
export const SliderContainer = styled.div`
 width: 100%;
 max-width: 1200px;
 min-height: 100vh;

 margin: 0rem auto;

 @media screen and (max-width: 900px) {
  width: 140%;
  left: 50%;
  transform: translateX(-50%);
 }
 @media screen and (max-width: 500px) {
  width: 170%;
 }
`;

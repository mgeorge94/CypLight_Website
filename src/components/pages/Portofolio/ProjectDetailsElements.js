import styled from 'styled-components';
import { Carousel } from '3d-react-carousal';
export const DetailsContainer = styled.div`
 width: 100%;
 padding: 5rem;
 padding-top: 10rem;

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
 position: Relative;
 max-width: 1200px;
 height: 40vw;

 margin: 0rem auto;
 padding: 0;

 @media screen and (max-width: 900px) {
  width: 140%;
  left: 50%;
  height: 50vw;

  transform: translateX(-50%);
 }
 @media screen and (max-width: 500px) {
  width: 170%;
  left: 50%;
  height: 60vw;

  transform: translateX(-50%);
 }
 .hide {
  transform: translateX(-5%);
 }
`;

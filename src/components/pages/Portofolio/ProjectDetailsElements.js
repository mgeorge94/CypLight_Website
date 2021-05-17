import styled from 'styled-components';

import { motion } from 'framer-motion';

export const DetailsContainer = styled(motion.div)`
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
 p {
  padding-bottom: 5rem;
 }
`;
export const SliderContainer = styled(motion.div)`
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
//animation
export const Frame1 = styled(motion.div)`
 position: fixed;
 left: 0;
 width: 120%;
 height: 120%;
 background: var(--light-accent-color);
 z-index: 2;
 margin-top: -15rem;
`;
export const Frame2 = styled(Frame1)`
 filter: brightness(60%);
 z-index: 3;
`;
export const Frame3 = styled(Frame1)`
 filter: brightness(40%);
 z-index: 4;
`;
export const Frame4 = styled(Frame1)`
 background: #2e2e2e;

 z-index: 5;
`;

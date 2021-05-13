import React from 'react';
import img from '../../../images/role-pic.webp';
import { RoleContainer, Description, Image } from './RoleElements.js';
import { Button } from '../../ButtonElements';

const Role = ({ data }) => {
 return (
  <>
   <RoleContainer>
    <Image>
     <img src={img} alt='footwell-lights' />
    </Image>
    <Description>
     <div className='title'>
      <h2>{data.h2}</h2>
      <p>{data.p}</p>
      <div className='btn-wrapper'>
       <Button>{data.buttonLabel}</Button>
      </div>
     </div>
    </Description>
   </RoleContainer>
  </>
 );
};

export default Role;

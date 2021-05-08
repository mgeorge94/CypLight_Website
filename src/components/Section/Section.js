import React from 'react';
import { SectionContainer, Header } from './SectionElements';

const Section = ({ active }) => {
 return (
  <>
   <SectionContainer active={active} className='main'>
    <Header>
     <div className='overlay'>
      <div className='inner'>
       <h2 className='title'>Visul tău, pasiunea mea</h2>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias est nobis culpa laudantium corrupti aut{' '}
        <a href='/' className='link-btn'></a>
       </p>
      </div>
     </div>
    </Header>

    <div className='behind two'></div>
   </SectionContainer>
   <SectionContainer active={active} className='main'>
    <div className=' behind one'></div>
   </SectionContainer>
  </>
 );
};

export default Section;

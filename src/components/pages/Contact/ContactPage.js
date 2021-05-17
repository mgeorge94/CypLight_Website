import React from 'react';
import { ContactPageContainer } from './ContactPageElements';
import { FaWhatsapp, FaFacebookMessenger, FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ContactPage = () => {
 return (
  <ContactPageContainer>
   <h1>
    <span>Hai</span> să stăm de vorbă{' '}
   </h1>
   <ul>
    <li>Tel: 0747800486</li>
    <li>Email: cyplight@gmail.com</li>
    <li>
     <span>
      <a href=' https://wa.me/40747808486'>
       <FaWhatsapp />
      </a>
     </span>
     <span>
      <a href=' http://m.me/customlightled.' target='_blank'>
       <FaFacebookMessenger />
      </a>
     </span>
    </li>
    <li>Vezi ce am mai lucrat</li>
   </ul>
  </ContactPageContainer>
 );
};

export default ContactPage;

import React from 'react';

const Footer = () => {
   return (
      <div className='p-4 w-100 text-center bg-primary text-light'>
         {new Date().getFullYear()}
      </div>
   );
};

export default Footer;
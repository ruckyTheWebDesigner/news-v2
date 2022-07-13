import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className='footer'>
      <p className='text-xl font-serif'>Copyright &copy; 2007 - {date}</p>
    </div>
  );
}

export default Footer;

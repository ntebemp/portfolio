import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    
    <footer>
      <div>
        © {year} Marie Paule Ntebe - Design & Dev •{" "}
        <a href="https://www.linkedin.com/in/marie-paule-ntebe-b11923160/" target='_blank' >MPN</a>
      </div>
    </footer>
  );
};

export default Footer;

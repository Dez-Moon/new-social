import React from "react";
import s from './Footer.module.css';



const Footer = (props) => {

  return (
    <div className={s.footer}>
      <span>
        <b>New Social</b>  v1.0 © DezMoon 2022
      </span>
    </div>
  )
};

export default Footer;
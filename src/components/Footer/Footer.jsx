import React from "react";
import Style from "./Footer.module.css";
import { FaWhatsapp, FaEnvelope, FaCode } from "react-icons/fa";

export default function Footer() {

  const handleWhatsappClick = () => {
    window.open(`https://wa.me/3516658905`, "_blank");
  };

  return (
    <footer className={Style.footer}>
      <a className={Style.email} href="mailto:ventas@electricord.shop">
        <FaEnvelope /> ventas@electricord.shop
      </a>
      <span onClick={handleWhatsappClick}>
        <FaWhatsapp className={Style.whatsappIcon} />
      </span>
      © 2024 - electricord.shop
      <span
        onClick={() => window.open("https://vizalgroup.com/", "_blank")}
        className={Style.developmentIcon}
      >
        dev
        <FaCode />
      </span>{" "}
    </footer>
  );
}

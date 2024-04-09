import React from "react";
import Style from "./MainLanding.module.css";

export default function MainLanding() {
  return (
    <div class="container">
      <h3 className={Style.title}>¡Bienvenido a Electricord!</h3>
      <br />
      <br />
      <p className={Style.parr}>
        Electricord ofrece todo para tu vehículo, desde{" "}
        <strong>
          fichas eléctricas, inyectores, cables de bujías, captores y bobinas
          Bougicord.
        </strong>
        {" "}Asesoramiento, explora nuestra selección de productos de alta calidad Si
        tienes Taller de reparación o local de venta de repuestos, solicita una
        cotización a través de WhatsApp o contáctanos al{" "}
        <a href="https://wa.me/3516658905"> 3516658905</a> o{" "}
        <a href="https://wa.me/3516845357">3516845357</a>
      </p>
      <br />
    </div>
  );
}

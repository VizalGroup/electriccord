import React from "react";
import Style from "./MainLanding.module.css";

export default function MainLanding() {
  return (
    <div class="container">
      <h3 className={Style.title}>¡Bienvenido a Electricord!</h3>
      <br />
      <br />
      <p className={Style.parr}>
        En Electricord, somos tu destino confiable para todo lo relacionado con
        el mantenimiento y la optimización de tu vehículo en la industria
        automotriz. Con una pasión inquebrantable por la calidad y el
        rendimiento, nos enorgullecemos de ofrecerte una amplia gama de
        productos especializados, desde <strong>Fichas eléctricas </strong>
        hasta <strong>Bobinas Bougicord</strong>,{" "}
        <strong>Captores Bougicord</strong>, y <strong>Cables de Bujías</strong>
        .<br />
        <br />
        ¿Qué nos distingue? Nuestra dedicación a la excelencia y nuestro
        compromiso con la satisfacción del cliente. Ya sea que seas un
        entusiasta del motor experimentado o simplemente estés buscando mantener
        tu vehículo en óptimas condiciones, estamos aquí para proporcionarte las
        soluciones que necesitas.
        <br />
        <br />
        Explora nuestra selección cuidadosamente curada de productos de alta
        calidad y descubre cómo podemos ayudarte a mejorar el rendimiento y la
        fiabilidad de tu vehículo. Nuestro equipo experto está listo para
        brindarte asesoramiento personalizado y responder a todas tus preguntas.
        <br />
        <br />
        Para más información, <b><a href="/contacto" style={{color:'white',}}>contáctanos</a></b>
       
        .<br />
        <br />
        Únete a la comunidad de Electricord y experimenta la diferencia que
        hacen nuestros productos en tu viaje automotriz. ¡Descubre la calidad,
        la confiabilidad y el rendimiento que te ofrecemos en Electricord hoy
        mismo!
      </p>
      <br />
    </div>
  );
}

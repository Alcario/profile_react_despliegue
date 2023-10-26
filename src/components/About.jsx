import React from "react";

function About() {
  // Datos ficticios para el componente "Acerca de"
  const aboutData = {
    nombre: "Albano Caminos",
    //calcular mi edad por medio de mi año de nacimiento y mes de nacimiento
    edad:
      new Date().getMonth() > 8
        ? new Date().getFullYear() - 1995
        : new Date().getFullYear() - 1995 - 1,
    profesion: "Desarrollador Web",
    descripcion:
      "Soy un apasionado desarrollador web con experiencia en tecnologías como React, Node.js y Bootstrap. Me encanta crear aplicaciones web creativas y funcionales para mis clientes. Fuera del trabajo, disfruto de la música, la lectura y el senderismo en la naturaleza.",
  };

  return (
    <div className="container mb-3">
      <h2>Acerca de Mí</h2>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{aboutData.nombre}</h3>
          <p className="card-text">Edad: {aboutData.edad} años</p>
          <p className="card-text">Profesión: {aboutData.profesion}</p>
          <p className="card-text">{aboutData.descripcion}</p>
        </div>
      </div>
    </div>
  );
}

export default About;

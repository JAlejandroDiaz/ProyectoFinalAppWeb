import React from "react";
import { FaGithub, FaGoogle, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="text-center text-lg-start bg-dark text-white">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-uppercase">CREADORES</h5>
            <p>ANDERSON FLOREZ MAZETA</p>
            <p> ALEJANDRO DIAZ</p>
            <p> MR. YAIMA DE JESUS</p>
          </div>
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 bg-dark text-white">
            <h5 className="text-uppercase">CONTACTOS</h5>
            <FaGithub size={28} className="mx-1" />
            <FaGoogle size={28} className="mx-1" />
            <FaWhatsapp size={30} className="mx-1" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              atque ea quis molestias. Fugiat pariatur maxime quis culpa
              corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-3 bg-gradient-primary">
        ¡Bienvenidos a "Yaima69.com"! ¡Donde el tesoro más preciado son las
        líneas de código robadas... de la comedia! ¡Únete a nuestra tripulación
        de programadores piratas y prepárate para saquear risas con cada "arrr"
        de código que escribas!
      </div>
      <div
        className="text-center p-3 bg-gradient-primary"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright:
        <a className="text-dark" href="https://www.youtube.com/@MotosFlyPasion">
          {" "}
          Yaima69.com{" "}
        </a>
      </div>
    </footer>
  );
};

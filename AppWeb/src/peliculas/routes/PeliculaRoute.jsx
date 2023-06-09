import { Home, PagePelicula } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import {} from 'module';
import "../styles/styles.css";
import { useEffect, useState } from "react";
import { Footer } from "../../ui/components/Footer";
import { Login } from "../../auth/pages";

export const PeliculaRoute = () => {
  const [buscarPeli, setbuscarPelicula] = useState();
  const [idgenero, setidgenero] = useState();

  return (
    <>
      <Navbar setbuscarP={setbuscarPelicula} setGenero={setidgenero} />
      <Routes>
        <Route path="/Home" element={<Home buscarPeli={buscarPeli} IDgenero={idgenero} />} />
        <Route path="/Movie/:movieId" element={<PagePelicula />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      <div className="footerContainer">
        <Footer />
      </div>
    </>
  );
};


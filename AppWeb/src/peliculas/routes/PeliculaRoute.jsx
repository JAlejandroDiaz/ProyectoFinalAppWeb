import { Home, PagePelicula } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import {} from 'module';
import "../styles/styles.css";
import { useEffect, useState } from "react";
import { Footer } from "../../ui/components/Footer";

export const PeliculaRoute = () => {
const [buscarPeli, setbuscarPelicula] = useState()




 
  return (
    <>
      <Navbar setbuscarP={setbuscarPelicula}/>
      <Routes>
        <Route path="Home" element={<Home buscarPeli={buscarPeli}  />} />
        <Route path="/*" element={<Navigate to="Home" />} />
        <Route path="Movie/:movieId" element={<PagePelicula />}/>
        <Route />
      </Routes>
      <div className="footerContainer">
      <Footer/>
      </div>
     
    </>
  );
};

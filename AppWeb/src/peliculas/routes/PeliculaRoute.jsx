import { Home } from "../pages";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import "../styles/styles.css";
import { useEffect, useState } from "react";

export const PeliculaRoute = () => {
const [buscarPeli, setbuscarPelicula] = useState()
 
  return (
    <>
      <Navbar setbuscarP={setbuscarPelicula}/>
      <Routes>
        <Route path="Home" element={<Home buscarPeli={buscarPeli}  />} />
        <Route path="/*" element={<Navigate to="Home" />} />
        <Route />
      </Routes>
    </>
  );
};

import {Route, Routes, Navigate} from 'react-router-dom'
import { PeliculaRoute } from '../peliculas/routes/PeliculaRoute'
import { Login,SingUp } from '../auth/pages'
import React, { useContext } from 'react'
import { authContext } from "../auth/context/AuthContect"

//Manejo de las rutas auth cada componente tiene sus routas propias
export const AppRouter = () => {
  const { user } = useContext(authContext);

  return (
    
    <Routes>
      {!user ? (
        <>
         <Route path="login" element={<Login />} />
          <Route path="SingUp" element={<SingUp />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<PeliculaRoute />} />
          <Route path="/" element={<Navigate to="/*" />} />
        </>
      )}
    </Routes>
  );
};

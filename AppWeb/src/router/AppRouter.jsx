import {Route, Routes, Navigate} from 'react-router-dom'
import { PeliculaRoute } from '../peliculas/routes/PeliculaRoute'
import { Login,SingUp } from '../auth/pages'
import React, { useContext } from 'react'
import { authContext } from "../auth/context/AuthContect"

//Manejo de las rutas auth cada componente tiene sus routas propias
export const AppRouter = () => {

 const {user} = useContext(authContext)
 //console.log({user})
  return (
    
    <Routes>
        {user? <>
          <Route path='/*' element={<PeliculaRoute/>}/>
          <Route path='/' element={<Navigate to='/*'/>}/>
        </>:
        <>
          <Route path='login' element={<Login />}/>
          <Route path='SingUp' element={<SingUp />}/>
          <Route path='/' element={<Navigate to='/login'/>}/>
        </>}
      
      {/* Rutas propias de la app 
      <Route path='/*' element={<PeliculaRoute/>}/>
      <Route path='/' element={<Navigate to='/login'/>}/>*/}
    </Routes>
    
  )
}

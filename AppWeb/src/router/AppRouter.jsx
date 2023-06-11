import {Route, Routes, Navigate} from 'react-router-dom'
import { PeliculaRoute } from '../peliculas/routes/PeliculaRoute'
import { Login,SingUp } from '../auth/pages'

//Manejo de las rutas auth cada componente tiene sus routas propias
export const AppRouter = () => {
  return (
    <>
    <Routes>
        {/* rutas de Auth */}
      <Route path='login' element={<Login/>}/>
      <Route path='SingUp' element={<SingUp/>}/>
      {/* Rutas propias de la app */}
      <Route path='/*' element={<PeliculaRoute/>}/>
      <Route path='/' element={<Navigate to='/login'/>}/>
    </Routes>
    </>
  )
}

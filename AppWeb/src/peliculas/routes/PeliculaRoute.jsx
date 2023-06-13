
import { Home } from '../pages'
import {Navigate, Route, Routes} from 'react-router-dom'

export const PeliculaRoute = () => {
 
  return (
    
    <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='/*' element={<Navigate to="Home"/>}/>
        <Route/>
    </Routes>
    
  )
}

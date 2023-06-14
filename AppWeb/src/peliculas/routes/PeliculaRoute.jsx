
import { Home } from '../pages'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Navbar}  from '../../ui/components/Navbar'


export const PeliculaRoute = () => {
 
  return (
    <>
     <Navbar/> 
    <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route path='/*' element={<Navigate to="Home"/>}/>
        <Route/>
    </Routes>
    </>
     
    
  )
}

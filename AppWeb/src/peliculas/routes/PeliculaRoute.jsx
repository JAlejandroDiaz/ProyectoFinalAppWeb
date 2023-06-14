import { Home } from '../pages'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Navbar}  from '../../ui/components/Navbar'
import '../styles/styles.css'

export const PeliculaRoute = () => {
 
  return (
    <>

    <div className="header">
          <Navbar />   
    </div>
       

    <Routes>
        <Route path='Home' element={<Home />}/>
        <Route path='/*' element={<Navigate to="Home"/>}/>
        <Route/>
    </Routes>
    </>
     
    
  )
}

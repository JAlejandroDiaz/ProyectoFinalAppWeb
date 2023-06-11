import React from 'react'
import { Home } from '../pages'
import {Route, Routes} from 'react-router-dom'
export const PeliculaRoute = () => {
  return (
    <>
    <Routes>
        <Route path='Home' element={<Home/>}/>
        <Route/>
    </Routes>
    </>
  )
}

import React from 'react'
import { AuthProvider } from '../../context/AuthContect'
import { FormLogin } from '../formularios/formLogin'

export const Login = () => {
  return (
    <AuthProvider>

      <FormLogin />
    </AuthProvider>
  )
}

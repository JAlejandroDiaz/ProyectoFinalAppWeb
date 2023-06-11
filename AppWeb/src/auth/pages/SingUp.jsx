import React from 'react'
import { AuthProvider } from '../../context/AuthContect'
import { FormSinUp } from '../formularios/FormSinUp'
export const SingUp = () => {
    return (
        <AuthProvider>
            <FormSinUp />
        </AuthProvider>
    )
}

import { useState } from "react"
import { useAuth } from "../../context/AuthContect"
export const FormSinUp = () => {
    const auth = useAuth()
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const handleRegister = (e) => {
        e.preventDefault()
        auth.register(emailRegister, passwordRegister)
    }


    // console.log(emailRegister, passwordRegister, "SingUp")
    return (
        <div className="APP">
            <form className="form" color="redc">
                <h3 className="tittle">Formulario Registro</h3>
                <input onChange={(e) => setEmailRegister(e.target.value)}
                    type="email"
                    className="input" />
                <input onChange={(e) => setPasswordRegister(e.target.value)}
                    type="password"
                    className="input" />
                <button onClick={(e) => handleRegister(e)} className="button">Submit</button>
            </form>
        </div>
    )
}

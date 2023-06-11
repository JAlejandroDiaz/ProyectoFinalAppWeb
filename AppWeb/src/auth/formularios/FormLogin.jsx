import { useState } from "react"
import { useAuth } from "../../context/AuthContect"



export const FormLogin = () => {

    const auth = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(email, password, "FromLogin")

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login(email,password)
    }

    const handleGoogle =(e) =>{
        e.preventDefault()
        auth.loginWithGoogle()
    }

    return (
        <div className="APP">
            <form className="form" >
                <h3 className="tittle">Formulario Login</h3>
                
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" />
                <button onClick={(e) => handleLogin(e)}>Inicia sesión</button>
                <button onClick={(e) => handleGoogle(e)} className="button">Inicuara con google</button>

            </form>
        </div >
  )
}

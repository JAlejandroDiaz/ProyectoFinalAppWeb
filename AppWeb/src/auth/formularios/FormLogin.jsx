import { useState } from "react"
import { useAuth } from "../../context/AuthContect"



export const FormLogin = () => {

    const auth = useAuth()

        if(!auth.email){
            console.log("no hay nada")
        } 
        else{
            console.log("si hay algo")
        }


    const {displayName}= auth.user
    console.log(displayName)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // console.log(email, password, "FromLogin")

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login(email,password)
    }

    const handleGoogle =(e) =>{
        e.preventDefault()
        auth.loginWithGoogle()
    }

    const handleLogout =() =>{
        auth.logout()
    }


    return (
        <div className="APP">
            <form className="form" >
                <h3 className="tittle">Formulario Login</h3>
                
                <input onChange={(e) => setEmail(e.target.value)} type="email" className="input" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="input" />
                <button onClick={(e) => handleLogin(e)}>Inicia sesión</button>
                <button onClick={(e) => handleGoogle(e)} className="button">Iniciar con google</button>
                <button onClick={() => handleLogout()} className="button">Cerrar sesion</button>

            </form>
        </div >
  )
}

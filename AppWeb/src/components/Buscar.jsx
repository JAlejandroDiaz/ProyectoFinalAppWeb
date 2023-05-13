import { useState } from "react";

const Buscar = () => {
    const [buscar, setbuscar] = useState('')

    return(
        <form onSubmit={ev => {
            ev.preventDefault();
            setbuscar(ev.target.buscar.value)
        }}>
            <input type="text" name="buscar" autoComplete="off" />
            <button type="submit"> buscar</button>
            <h1> {buscar}</h1>
        </form>
        
    )
}
 
export default Buscar
import { useState } from "react";

export const Ejercicio3 = () => {
    
    const calcularHora = (hora) => {
        let mensaje;
        let inputHora = Math.abs(hora)
        inputHora = Math.round(inputHora)
        
        if (inputHora < 12 || inputHora == 0 || inputHora == 24){
            mensaje = "Buenas Dias"
        } else if ((12 < inputHora) && (inputHora < 18) || (inputHora == 12)){
            mensaje = "Buenas Tardes"
        } else if ((18 < inputHora) && (inputHora <= 23)){
            mensaje = "Buenas Noches"
        } else{
            mensaje = "El valor ingresado puede no ser en formato militar horas"
        }
        return (mensaje)
        }

    const [horas, setTiempo] = useState(0);
    const [mensajeCompleto, setMensaje] = useState("")
    const [nombre, setNombre] = useState("")

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const handleNombre = (evt) => {
        setNombre(evt.target.value)
    }

    const handleHora = (evt) => {
        setTiempo(evt.target.value)
    }

    const calcularTiempo = () => {
        setMensaje(calcularHora(horas))
        setTiempo(0)
    }
   
    return (
        <>
            <h1 className="is">Ejercicio 3</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Dependiendo de tu hora te saludara adecuadamente</h2>
                <br/>
                <label htmlFor="ingresa">Escribe tu nombre</label>
                <div>
                    <input 
                        type="text" 
                        value={nombre} onChange={(event) => handleNombre(event) }
                    />
                    <label htmlFor="number">Escribe solo la hora en formato militar</label>
                    <input 
                        type="number" 
                        value={horas} onChange={(event) => handleHora(event) }
                    /> 
                </div>
                <button onClick={() => calcularTiempo(horas)} type="submit">Realizar saludo</button>
                <br/>
                <h3 htmlFor="mensaje"> {mensajeCompleto} {nombre}</h3>
            </form>
        </>
    )

}
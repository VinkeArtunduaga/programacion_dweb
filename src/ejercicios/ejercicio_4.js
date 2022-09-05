import { useState } from "react";

export const Ejercicio4 = () => {
    var Mensaje = ""
    const identificarRepetidos = (a,b,c) => {
        let mensaje;
        if ((a == b) && (a == c)){
            mensaje = "Los tres numeros estan repetidos"
        } else if ((a == b) && (a != c) || (a == c) && (a != b) || (b == c) && (b != a)){
            mensaje = "Hay dos numeros repetidos"
        } else{
            mensaje = "Ningun numero esta repetido"
        }
        return (mensaje)
        }

    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(1);
    const [valor3, setValor3] = useState(2);
    const [mensajeCantidadRepetidos, setMensaje] = useState("")

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const obtenerValor1 = (evt) => {
        setValor1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setValor2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setValor3(evt.target.value)
    }

    const calcularRepetidos = (a,b,c) => {
        setMensaje(identificarRepetidos(a,b,c))
        setValor1()
        setValor2()
        setValor3()
    }
   
    return (
        <>
            <h1 className="is">Ejercicio 4</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Ingresa 3 numeros los que tu quieras y la pagina se dara cuenta cuantos estan repetidos</h2>
                <br/>
                <div>
                    <label htmlFor="valor">Primer valor</label>
                    <input 
                        type="number" 
                        value={valor1} onChange={(event) => obtenerValor1(event) }
                    />
                    <label htmlFor="valor">Segundo valor</label>
                    <input 
                        type="number" 
                        value={valor2} onChange={(event) => obtenerValor2(event) }
                    />
                    <label htmlFor="valor">Tercer Valor</label> 
                    <input 
                        type="number" 
                        value={valor3} onChange={(event) => obtenerValor3(event) }
                    />
                </div>
                <button onClick={() => calcularRepetidos(valor1,valor2,valor3)} type="submit">Analizar Repetidos</button>
                <br/>
                <h3 htmlFor="mensaje"> {mensajeCantidadRepetidos}</h3>
            </form>
        </>
    )
}
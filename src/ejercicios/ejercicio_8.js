import { useState } from "react";

export const Ejercicio8 = () => {
    var arregloprincipal = new Array()
    var arregloDividido = new Array()
    var numero;

    const LlenarArreglo = () => {
        for(let i=0; i < 10; i++){
            arregloprincipal[i] = Math.floor(Math.random()*100)

        }
        return(arregloprincipal)
    }

    const DividirPorValor = (a) => {
        if(a <= 9 && a> -1) {
            numero = arregloprincipal[a]
            for(let j=0; j < arregloprincipal.length; j++){
                arregloDividido[j] = (arregloprincipal[j] / numero).toFixed(4)
            }
            return (arregloDividido)
        } else {
            alert("El valor que ingresaste debe ser un numero entre 0 y 9")
            setDivision("El valor que ingresaste debe ser un numero entre 0 y 9")
            return("El valor que ingresaste debe ser un numero entre 0 y 9")

        }
    }
        
    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState('')
    const [arrayOperado, setDivision] = useState('')

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = () => {
        setArregloCompleto(LlenarArreglo())
        setDivision(DividirPorValor(valor))
       
    }
   
    return(
        <>
            <h1 className="is">Ejercicio 8</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Divide e imprime los elementos</h2>
                <br/>
                <div>
                    <label htmlFor="ingresar">Ingresa la posición del numero en la lista, debe ser un numero entre 0 y 9:</label>
                    <input 
                        type="number" 
                        value={valor} onChange={(event) => obtenerValor(event) }
                    />
                </div>
                <button onClick={() => Arreglo(valor)} type="submit">Generar la lista de numeros aleatorios y divide</button>
                <br/>
                <h3> Lista de numeros aleatorios: {arregloCompleto.toString()}</h3>
                <br/>
                <h3> Lista de numeros divididos por el puesto {valor}: {arrayOperado.toString()} </h3>
            </form>
        </>
    )  
}
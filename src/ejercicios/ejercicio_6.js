import { useState } from "react";

export const Ejercicio6 = () => {

    var arregloprincipal = new Array()
    var arregloImpar = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            arregloprincipal[i] = i
        
        }
        return(arregloprincipal)
    }

    const identificarImpares = () => {   
        for(let j=0; j <= arregloprincipal.length - 1; j++){
            if(arregloprincipal[j] % 2 != 0){
                arregloImpar[j] = j
            }
        }
        return (arregloImpar)
        }
    

    const [valor, setValor] = useState(0);
    const [setArregloCompleto] = useState("")
    const [todosLosimpares, setArregloimpares] = useState("")

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }
   

    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
        setArregloimpares(identificarImpares())
        
    }
   
   
    return(
        <>
            <h1 className="is">Ejercicio 6</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Numeros impares menores segun el numero que ingreses</h2>
                <br/>
                <div>
                    <label htmlFor="ingresar">Hasta que valor quieres que llegue el arreglo:</label>
                    <input 
                    type="number" 
                    value={valor} onChange={(event) => obtenerValor(event) }
                    />
                </div>

                <button onClick={() => Arreglo(valor)} type="submit">Analizar impares</button>
                <br/>
                <h3 htmlFor="mensaje"> Los numeros impares son: {todosLosimpares.toString()} </h3>
            </form>
        </>
    )
}
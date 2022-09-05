import { useState } from "react";

export const Ejercicio5 = () => {

    var arregloprincipal = new Array()

    const llenarArreglo = (a) => {
        for(let i=0; i <= a; i++){
            arregloprincipal[i] = i
        
        }
        return(arregloprincipal)
    }
    

    const [valor, setValor] = useState(0);
    const [arregloCompleto, setArregloCompleto] = useState("")

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const obtenerValor = (evt) => {
        setValor(evt.target.value)
    }

    const Arreglo = (a) => {
        setArregloCompleto(llenarArreglo(a))
        
    }
   
    return(
        <>
            <h1 className="is">Ejercicio 5</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Lista ordenada de menor a mayor segun el numero</h2>
                <br/>
                <div>
                    <label htmlFor="ingresa">Hasta que numero quieres que llegue el arreglo:</label>
                    <input 
                        type="number" 
                        value={valor} onChange={(event) => obtenerValor(event) }
                    />
                </div>

                <button onClick={() => Arreglo(valor)} type="submit">Analizar lista</button>
                <br/>
                <h3 htmlFor="mensaje"> La sucesion de numeros completa es: {arregloCompleto.toString()}</h3>
            </form>
        </>
    )
}
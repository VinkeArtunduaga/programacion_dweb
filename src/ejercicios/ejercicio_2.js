import { useState } from "react";

export const Ejercicio2 = () => {

    var tarifa = 100
    const calcularTarifa = (tiempoenminutos) => {
        let i = 0
        let minutos = tiempoenminutos

        if (minutos <= 3){
            tarifa = 100;
        } 
        
        else{
            let minutosAdicionales = minutos - 3
            while(i < minutosAdicionales){
            tarifa += 50
            i += 1
            }
        }
        
        return (tarifa)
    }

    const [tiempoenminutos, setTiempo] = useState(0);
    const [valorPagar, setValorPagar] = useState(0)

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const obtenerSegundos = (evt) => {
        setTiempo(evt.target.value)
    }

    const calcularTiempo = () => {
        setValorPagar(calcularTarifa(tiempoenminutos))
        setTiempo(0)
    }
   
    return (
        <>
            <h1 className="is">Ejercicio 2</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Determina la cantidad total a pagar por una llamada telefónica</h2>
                <br/>
                <label htmlFor="ingresa">Ingresa la cantidad de minutos que duro la llamada</label>
                <div>
                    <input 
                        type="number" 
                        value={tiempoenminutos} onChange={(event) => obtenerSegundos(event) }
                    />
                </div>
                <button onClick={() => calcularTiempo(tiempoenminutos)} type="submit">Calcular</button>
                <br/>
                <h3 htmlFor="ingresa">La cantidad total a pagar por la llamada telefónica son: {valorPagar} pesos</h3>
            </form>
        </>
    )
}
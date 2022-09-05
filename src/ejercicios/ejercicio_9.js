import { useState } from "react";

export const Ejercicio9 = () => {

    const LlenarTabla = (cantidadFilas, cantidadColumnas) => {
        var Table = document.getElementById("tablaDatos");
        Table.innerHTML = "";
        if(cantidadFilas < 0|| cantidadColumnas < 0){
            alert("La cantidad de filas y columnas no debe ser negativo")
        } else{
        if (filas > 0 || columnas > 0){
           for(let i = 0; i < cantidadFilas; i++) {
            let filaActual = document.getElementById('tablaDatos').insertRow(i);
            for(let j = 0; j < cantidadColumnas; j++){
                let celda = filaActual.insertCell(j);

                celda.innerHTML = `Fila: ${i} - Columna: ${j}`;
            }
           }
        }
        }
    }
        
    const [filas, setFilas] = useState(0);
    const [columnas, setColumnas] = useState(0);

    const handleSubmit = (e) => {
		e.preventDefault();
	}
   
    const obtenerFilas = (evt) => {
        setFilas(evt.target.value)
    }
    const obtenerColumnas = (evt) => {
        setColumnas(evt.target.value)
    }
   
    return(
        <>
            <h1 className="is">Ejercicio 9</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Creador de Tablas en HTML</h2>
                <br/>
                <div>
                    <label htmlFor="ingresar">Ingresar la cantidad de filas:</label>
                    <input 
                        type="number" 
                        value={filas} onChange={(event) => obtenerFilas(event) }
                    />
                    <label htmlFor="ingresar">Digita la cantidad de Columnas:</label>
                    <input 
                        type="number" 
                        value={columnas} onChange={(event) => obtenerColumnas(event) }
                    />
                </div>

                <button onClick={() => LlenarTabla(filas,columnas)} type="submit">Crear tabla</button>
                <br/>
                <table id="tablaDatos" border={2} className="tabla-linda"></table>
            </form>
        </>
    )
}
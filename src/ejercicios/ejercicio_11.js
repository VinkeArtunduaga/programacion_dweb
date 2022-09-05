import { useState } from "react";

export const Ejercicio11 = () => {

    const NotasCalculadora = (a,b,c) => {
        let not1 = +a
        let not2 = +b
        let not3 = +c
        if(a < 0 || b < 0 || c < 0){
            alert("Las notas no pueden ser negativas")
        } else{
            var mensaje;
            var suma = (not1 + not2 + not3)
            console.log(suma)
            var promedio = (suma / 3)
            console.log(promedio)
        
            if (promedio >= 3){
                mensaje = "Gano la Materia"
            } else{
                mensaje = "Lo lamento, perdiste la Materia"
            }
            return (mensaje)
        }
    }

    const EstudiantetoString = (estudiante) => {
        return "Nombre: " + estudiante.nombre 
        + "| Nota 1: " + estudiante.Nota1 
        + "| Nota 2: " + estudiante.Nota2 
        + "| Nota 3: " + estudiante.Nota3 
        + "| Estado: " + estudiante.estado;
    }


    const [nombre, setNombre] = useState("");
    const [nota1, setNota1] = useState(0);
    const [nota2, setNota2] = useState(0);
    const [nota3, setNota3] = useState(0);
    const [estadoFinal, setMensaje] = useState("")
    const [estudianteFinal,setEstudiante] = useState()

    const handleSubmit = (e) => {
		e.preventDefault();
	}

    const obtenerNombre = (evt) => {
        setNombre(evt.target.value)
    }
    const obtenerValor1 = (evt) => {
        setNota1(evt.target.value)
    }
    const obtenerValor2 = (evt) => {
        setNota2(evt.target.value)
    }
    const obtenerValor3 = (evt) => {
        setNota3(evt.target.value)
    }

    const crearEstudiante = (nombre,a,b,c) => {
        const estudiante = {
            nombre: nombre,
            Nota1: a,
            Nota2: b,
            Nota3: c,
            estado: "Ya valio",
        }
        estudiante.estado = NotasCalculadora(nota1,nota2,nota3)
        setEstudiante(estudiante)
        alert("Se creo el estudiante")
    }

    const mostrarEstudiante = (estudiante) => {
        setMensaje(EstudiantetoString(estudiante))
    }
   
    return (
        <>
            <h1 className="is">Ejercicio 11</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Registro de las notas de un estudiantes si gana o no gana</h2>
                <br/>
                <div>
                    <label htmlFor="ingresar">Ingresar el nombre del estudiante</label>
                    <input 
                        type="text" 
                        value={nombre} onChange={(event) => obtenerNombre(event) }
                    />
                    <label htmlFor="ingresar">Primera Nota</label>
                    <input 
                        type="number" step="0.01" 
                        value={nota1} onChange={(event) => obtenerValor1(event) }
                    />
                    <label htmlFor="ingresar">Segunda Nota</label> 
                    <input 
                        type="number" step="0.01" 
                        value={nota2} onChange={(event) => obtenerValor2(event) }
                    />
                    <label htmlFor="ingresar">Tercera Nota</label>
                    <input 
                        type="number" step="0.01" 
                        value={nota3} onChange={(event) => obtenerValor3(event) }
                    />
                </div>
                <button onClick={() => crearEstudiante(nombre,nota1,nota2,nota3)} type="submit">Crear estudiante</button>
                <br/>
                <button onClick={() => mostrarEstudiante(estudianteFinal)} type="submit">Mostrar estudiante</button>
                <br/>
                <h3 htmlFor="mensaje">{estadoFinal}</h3>
            </form>
        </>
    )
}
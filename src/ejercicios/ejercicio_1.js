import React, { useState } from 'react';

export const Ejercicio1 = () => {

    const [newTimeInSeconds, setNewTimeInSeconds] = useState('');

    const handleSubmit = (e) => {
		e.preventDefault();
	}


    const returnFormatedTime = () => {
        var hour = Math.floor(newTimeInSeconds / 3600);
        hour = (hour < 10) ? '0' + hour : hour;
        var minute = Math.floor((newTimeInSeconds / 60) % 60);
        minute = (minute < 10) ? '0' + minute : minute;
        var second = newTimeInSeconds % 60;
        second = (second < 10) ? '0' + second : second;

        setMensaje(hour + ':' + minute + ':' + second)
    }

    const [mensaje, setMensaje] = useState('')

    const handleOnChange = (event) => {
        setNewTimeInSeconds(event.target.value)
    }


    return (
        <>
            <h1 className="is">Ejercicio 1</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Convertidor de segundos en horas</h2>
                <br/>
                <label htmlFor='ingresa'>Ingresa los segundos</label>
                <div>
                    <input onChange={handleOnChange}
                        type="text">
                    </input>
                </div>
                <button onClick={returnFormatedTime} type="submit"> Convetir </button>
                <br/>
                <h3> {mensaje} </h3>
            </form>
        </>
    )
}
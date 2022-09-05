import { useState } from "react";


export const Ejercicio7=()=>{
    const categories =[]
    
    const [cat, setCat] = useState('')
    const [cats, setCats] = useState( categories)
    const [SalarioAum, setSalarioAum] = useState (cats)

    const handleSubmit = (e) => {
		e.preventDefault();
	} 

    const onCatChan = (evt) => {
        setCat( evt.target.value)
    }
    const onAddCats = () => {
        setCats([...cats, cat])
    }

    const onSalAum = () => {
            setSalarioAum(cats)
    }
    
    const error = () => {
        if(cats.length < 10){
            alert("Debe de ingresar 10 salarios exactamente")}
            else if (cats.length > 10){
                alert("Ya excedió el límite de salarios permitidos, comience de nuevo")}
            else {return onSalAum()}
    }
    
    return(
        <>
            <h1 className="is">Ejercicio 7</h1>
            <form action="" onSubmit={handleSubmit} className="formulario">
                <h2 className="are">Salarios con aumento del 8%</h2>
                <label htmlFor="ingresar">
                    Ingrese los salarios: 
                    <input onChange={(event) => onCatChan(event)} 
                        type='text'
                        write='Salarios...' 
                        value={cat}
                    />
                </label>
                <br/>
                <button onClick={ () => onAddCats()} type="submit"> Añadir salario</button>
                <br/>
                <button onClick={ () => error()} type="submit"> Aumento del 8% </button>
                <br/>
                <div className="main-container">
                <div className="salarios-container">
                    <h3>Salarios</h3>
                    <ol>
                        {
                            cats.map(
                                (category,key)=>
                                {
                                    return<li key={key}>{category}</li>}
                            )
                        }
                    </ol>
                </div>
                <div className="aumento-container">
                    <h3>Salarios con aumento</h3>
                    <ol>
                        {
                            SalarioAum.map(
                                (i,key)=> {
                                    return<li key={key}>{parseInt(i) + i * 0.08}</li>}
                            )
                        }
                    </ol>
                </div>
                </div>
            </form>
        </>
    )
}
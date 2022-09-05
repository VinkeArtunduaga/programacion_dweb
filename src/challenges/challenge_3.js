import { useState } from "react";

const categories =['first category','second category']

export const Challenge3 =()=>{
    const [cat, setCat] = useState('')
    const [cats, setCats] = useState( categories)

    const onCatChan = (evt) => {
        setCat( evt.target.value)
    }
    const onAddCats = () => {
        setCats([...cats, cat])
    }
    return(
        <>
        <h1>Challenge 3</h1>
        <label>
            write some text:
            <input onChange={(event) => onCatChan(event)} type='text'write='write some text' value={cat}/>
            <button onClick={ () => onAddCats()}> Add </button>
        </label>
        <h1>List</h1>
        <ol>
            {
                cats.map(
                    (i,key)=>
                    {
                        return<li key={key}>{i}</li>}
                )
            }
        </ol>
        </>
    )
}
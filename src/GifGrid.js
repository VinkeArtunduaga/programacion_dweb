import React from "react";
import { useEffect } from "react";
//import {getGifs} from "../helpers/getGifs"

export const GifGrid =({category}) => {

    useEffect( () => {
        console.log(category)
    }, [])

    return(
        <>
            <h3> {category} </h3>
            <p> Hello World </p>
        </>
    )

}
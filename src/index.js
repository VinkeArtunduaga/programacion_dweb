import React from 'react';
import ReactDOM from 'react-dom/client';
import './estilos_facheros/estilos.css';
import {FirstApp} from './challenges/challenge_1';
import { Challenge2 } from './challenges/challenge_2';
import { Challenge3 } from './challenges/challenge_3';
import {Ejercicio1} from './ejercicios/ejercicio_1'
import {Ejercicio2} from './ejercicios/ejercicio_2'
import {Ejercicio3} from './ejercicios/ejercicio_3'
import {Ejercicio4} from './ejercicios/ejercicio_4'
import {Ejercicio5} from './ejercicios/ejercicio_5'
import {Ejercicio6} from './ejercicios/ejercicio_6'
import {Ejercicio7} from './ejercicios/ejercicio_7'
import {Ejercicio8} from './ejercicios/ejercicio_8'
import {Ejercicio9} from './ejercicios/ejercicio_9'
import {Ejercicio11} from './ejercicios/ejercicio_11'
//import App from './App';
//import FirstApp from './FirstApp';
//import {SecondsToFromated} from "./segundos"

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <h1 className='is'>Kevin Artunduaga 2216155</h1>
  <FirstApp/>
  <Challenge2 value={0}/>
  <Challenge3/>
  <Ejercicio1/>
  <Ejercicio2/>
  <Ejercicio3/>
  <Ejercicio4/>
  <Ejercicio5/>
  <Ejercicio6/>
  <Ejercicio7/>
  <Ejercicio8/>
  <Ejercicio9/>
  <Ejercicio11/>
  </>
);

/* ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Ejercicio1/>
  <Ejercicio2/>
  <Ejercicio3/>
  <Ejercicio4/>
  <Ejercicio5/>
  <Ejercicio6/>
  <Ejercicio7/>
  <Ejercicio8/>
  <Ejercicio9/>
  <Ejercicio11/>
  </>
); */

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstApp />
  </React.StrictMode>
);
*/



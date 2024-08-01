import letras from "./modulos/modulo_letras.js";
import validar from "./modulos/modulo_validar.js";

const $formulario = document.querySelector('form');
const nombre = document.querySelector('#Nombre');
const boton = document.querySelector('button');

nombre.addEventListener('keypress', letras)

$formulario.addEventListener('submit', (event) => {
    let responce = validar(event, 'form [requiered]');
    const data = {
        name: nombre.value,
    }
    if (responce) {
        boton.setAttribute('disabled', '')
        fetch('http://localhost:3000/documents', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            	
        });
    }
})
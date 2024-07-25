import validar from "./modulo_validar.js";
import remover from "./modulo_remover.js";
import numeros from "./modulo_numeros.js";
import letras from "./modulo_letras.js";
import val_correo from "./modulo_correo.js";

const $formulario = document.querySelector('form');
const nombre = document.querySelector('#Nombre')
const apellido = document.querySelector('#Apellido')
const telefono = document.querySelector('#Telefono')
const direccion = document.querySelector('#Direccion')
const tipo_Documento = document.querySelector('#Tipo_Documento')
const documento = document.querySelector('#Documento')
const check = document.querySelector('#checkbox')
const boton = document.querySelector('button')
const correo = document.querySelector('#Correo')

addEventListener('DOMContentLoaded', (event) =>{
    if (!check.checked) {
        boton.setAttribute('disabled', '');
    }
});

check.addEventListener('change', function (event) {
    if (event.target.checked) {
        boton.removeAttribute('disabled')
    }
    else{
        boton.setAttribute('disabled', '')
    }
})

$formulario.addEventListener('submit', (event) => {
    validar(event, "form [required]")
});

nombre.addEventListener('keypress', (event) =>{
    remover(event, nombre)
});
apellido.addEventListener('keypress', (event) =>{
    remover(event, apellido)
});
telefono.addEventListener('keypress', (event) =>{
    remover(event, telefono)
});
direccion.addEventListener('keypress', (event) =>{
    remover(event, direccion)
});
tipo_Documento.addEventListener('change', (event) =>{
    remover(event, tipo_Documento)
});
documento.addEventListener('keypress', (event) =>{
    remover(event, documento)
});
correo.addEventListener('keypress', (event) =>{
    remover(event, correo)
})

telefono.addEventListener('keypress', numeros);
documento.addEventListener('keypress', numeros);

nombre.addEventListener('keypress', (event) =>{
    letras(event, nombre)
});
apellido.addEventListener('keypress', (event) =>{
    letras(event, apellido)
});

correo.addEventListener('keypress', (event) =>{
    val_correo(event, correo)
})
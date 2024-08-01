import validar from "./modulos/modulo_validar.js";
import remover from "./modulos/modulo_remover.js";
import numeros from "./modulos/modulo_numeros.js";
import letras from "./modulos/modulo_letras.js";
import val_correo from "./modulos/modulo_correo.js";
import solicitud from "./modulos/ajax.js";

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

const docs = () => {
    const fracmento = document.createDocumentFragment();
    fetch('http://localhost:3000/documents')
    .then((response) => response.json())
    .then((data) => {
        data.forEach(element => {
            let option = document.createElement('option');
            option.value = element.id;
            option.textContent = element.name
            fracmento.appendChild(option);
        });
        tipo_Documento.appendChild(fracmento);
    });
}

const listar = () =>{
    let data = solicitud('users');
    console.log(data);
}

addEventListener('DOMContentLoaded', (event) =>{
    docs();
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
    let responce = validar(event, "form [required]")
    const data = {
        firt_name: nombre.value,
        last_name: apellido.value,
        addres: direccion.value,
        type_id: tipo_Documento.value,
        document: documento.value,
        email: correo.value,
        phone: telefono.value,
    }
    if (responce) {
        fetch('http://localhost:3000/users',{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }
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
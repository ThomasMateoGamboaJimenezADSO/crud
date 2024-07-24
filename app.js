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

const validar  = (event) =>{
    event.preventDefault();
    if (nombre.value === ""){
        // alert('no hay un nombre')
        nombre.focus()
        nombre.classList.add('error')
    }
    if (apellido.value === ""){
        // alert('no hay un apellido')
        apellido.focus()
        apellido.classList.add('error')
    }
    if (telefono.value === ""){
        // alert('no hay un telefono')
        telefono.focus()
        telefono.classList.add('error')
    }
    if (direccion.value === ""){
        // alert('no hay una direccion')
        direccion.focus()
        direccion.classList.add('error')
    }
    if (tipo_Documento.value == ""){
        // alert('no hay un tipo de documento')
        tipo_Documento.focus()
        tipo_Documento.classList.add('error')
    }
    if (documento.value === ""){
        // alert('no hay un documento')
        documento.focus()
        documento.classList.add('error')
    }
    if (correo.value === ""){
        // alert('no hay un correo electronico')
        correo.focus()
        correo.classList.add('error')
    }

}

const remover = (e, input) =>{
    if (input.value != ''){
        input.classList.remove('error')
        input.classList.add('correcto')
    }
}

const numeros = (event) =>{
    if (event.keyCode < 48 || event.keyCode > 57) 
        event.preventDefault();
}

const letras = (event) =>{
    let exprecion_letras = /^[a-zA-Z\s]+$/;
    if (exprecion_letras.test(event.key)){
        console.log('error');
    } 
    else{
        event.preventDefault();
    }
}

const val_correo = (e, input) =>{
    let exprecion_correo = /^[\w-._]+@[\w-._]+(\.[a-zA-Z]{2,3}){1,2}$/;
    if (exprecion_correo.test(input.value)) {
        input.classList.remove('error')
        input.classList.add('correcto')

    } else {
        input.classList.remove('correcto')
        input.classList.add('error')
    }
}

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

$formulario.addEventListener('submit', validar);

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
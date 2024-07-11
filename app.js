const $formulario = document.querySelector('form');
const nombre = document.querySelector('#Nombre')
const apellido = document.querySelector('#Apellido')
const telefono = document.querySelector('#Telefono')
const direccion = document.querySelector('#Direccion')
const tipo_Documento = document.querySelector('#Tipo_Documento')
const documento = document.querySelector('#Documento')


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
    // console.log(nombre.value);
    // console.log(apellido.value);
    // console.log(telefono.value);
    // console.log(direccion.value);
    // console.log(documento.value);
    // console.log(tipo_Documento.value)
}

const remover = (e, input) =>{
    if (input.value != ''){
        input.classList.remove('error')
        input.classList.add('correcto')
    }
}

// const llenar = (e, input) =>{
//     if (input.value === ''){
//         input.classList.remove('corecto')
//         input.classList.add('error')
//     }
// }

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


// $formulario.addEventListener('submit', function (event){
//     event.preventDefault();
// });
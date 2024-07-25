const validar  = (event, elementos) =>{
    event.preventDefault();
    let formulario = document.querySelectorAll(elementos)
    console.log(formulario);
    formulario.forEach();
    // if (nombre.value === ""){
    //     // alert('no hay un nombre')
    //     nombre.focus()
    //     nombre.classList.add('error')
    // }
    // if (apellido.value === ""){
    //     // alert('no hay un apellido')
    //     apellido.focus()
    //     apellido.classList.add('error')
    // }
    // if (telefono.value === ""){
    //     // alert('no hay un telefono')
    //     telefono.focus()
    //     telefono.classList.add('error')
    // }
    // if (direccion.value === ""){
    //     // alert('no hay una direccion')
    //     direccion.focus()
    //     direccion.classList.add('error')
    // }
    // if (tipo_Documento.value == ""){
    //     // alert('no hay un tipo de documento')
    //     tipo_Documento.focus()
    //     tipo_Documento.classList.add('error')
    // }
    // if (documento.value === ""){

    //     // alert('no hay un documento')
    //     documento.focus()
    //     documento.classList.add('error')
    // }
    // if (correo.value === ""){
    //     // alert('no hay un correo electronico')
    //     correo.focus()
    //     correo.classList.add('error')
    // }
}

export default validar;
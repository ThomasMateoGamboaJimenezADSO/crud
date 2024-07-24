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
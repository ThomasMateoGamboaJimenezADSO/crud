const validar  = (event, busqueda) =>{
    event.preventDefault();
    const formulario = document.querySelectorAll(busqueda)
    console.log(formulario);
    let bandera = true;
    formulario.forEach(elemento => {
        if (elemento.value === ""){
            elemento.classList.add('error')
            bandera = false;
        }
    });
    return bandera;
}

export default validar;
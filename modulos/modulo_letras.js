const letras = (event) =>{
    let exprecion_letras = /^[a-zA-Z\s]+$/;
    if (!exprecion_letras.test(event.key)){
        event.preventDefault();
    } 
    
}

export default letras;
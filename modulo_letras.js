const letras = (event) =>{
    let exprecion_letras = /^[a-zA-Z\s]+$/;
    if (exprecion_letras.test(event.key)){
        console.log('error');
    } 
    else{
        event.preventDefault();
    }
}

export default letras;
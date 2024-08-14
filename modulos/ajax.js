import { URL } from "../config.js";

const solicitud = async (url) =>{
    let solicitud = await fetch(`${URL}users`);
    let data = await solicitud.json();
    return data;
}

const enviar = async (endpoint, options) =>{
    try {
        let solicitud = await fetch(`${URL}`) 
        let data = await solicitud

    }
}

export default solicitud;
import validar from "./modulos/modulo_validar.js";
import remover from "./modulos/modulo_remover.js";
import numeros from "./modulos/modulo_numeros.js";
import letras from "./modulos/modulo_letras.js";
import val_correo from "./modulos/modulo_correo.js";
import solicitud from "./modulos/ajax.js";
import {URL} from "./config.js";

const $formulario = document.querySelector('form');
const nombre = document.querySelector('#Nombre');
const apellido = document.querySelector('#Apellido');
const telefono = document.querySelector('#Telefono');
const direccion = document.querySelector('#Direccion');
const tipo_Documento = document.querySelector('#Tipo_Documento');
const documento = document.querySelector('#Documento');
const check = document.querySelector('#checkbox');
const boton = document.querySelector('button');
const correo = document.querySelector('#Correo');
const tbusers = document.querySelector('#tp_users').content;
const fracmento = document.createDocumentFragment();
const tbody = document.querySelector('tbody');

const cantidad = (elemento) =>{
    let valor = elemento.value.length === 10;
    if (valor) {
        console.log('correcto')
    }
    else{
        elemento.classList.remove('correcto')
        elemento.classList.add('error')
    }
}

const docs = () => {
    const fracmento = document.createDocumentFragment();
    fetch(`${URL}documents`)
    .then((response) => response.json())
    .then((data) => {
        let option = document.createElement('option');
        option.textContent = 'seleccione ...';
        option.value = ''
        fracmento.appendChild(option);
        data.forEach(element => {
            let option = document.createElement('option');
            option.value = element.id;
            option.textContent = element.name
            fracmento.appendChild(option);
        });
        tipo_Documento.appendChild(fracmento);
    });
}

const listar = async () =>{
    const data = await solicitud('users');
    const documentos = await solicitud('documents')
    data.forEach(element =>{
        tbusers.querySelector('.Nombre').textContent = element.firt_name;
        tbusers.querySelector('.Apellido').textContent = element.last_name;
        tbusers.querySelector('.Telefono').textContent = element.phone;
        tbusers.querySelector('.Direccion').textContent = element.addres;
        tbusers.querySelector('.Tipo_Documento').textContent = element.type_id;
        tbusers.querySelector('.Documento').textContent = element.document;
        tbusers.querySelector('.Correo').textContent = element.email; 
        tbusers.querySelector('.Eliminar').setAttribute('data-id', element.id);   
        tbusers.querySelector('.Modificar').setAttribute('data-id', element.id);   
        const clone = document.importNode(tbusers, true)
        fracmento.appendChild(clone);
    })
}

const createRow = (data) =>{
    const tr = tbody.insertRow(-1);
    const tbNombre = tr.insertCell(0)
    const tbApellido = tr.insertCell(1)
    const tbTelefono = tr.insertCell(2)
    const tbDireccion = tr.insertCell(3)
    const tbTipo = tr.insertCell(4)
    const tbDocumento = tr.insertCell(5)
    const tbCorreo = tr.insertCell(6)
    tbNombre.textContent = data.firt_name;
    tbApellido.textContent = data.last_name;
    tbTelefono.textContent = data.phone;
    tbDireccion.textContent = data.addres;
    tbTipo.textContent = data.type_id;
    tbDocumento.textContent = data.document;
    tbCorreo.textContent = data.email;
}

const buscar = (element) =>{
    
    
}

addEventListener('DOMContentLoaded', (event) =>{
    docs();
    listar();
    if (!check.checked) {
        boton.setAttribute('disabled', '');
    }
});

check.addEventListener('change', function (event) {
    if (event.target.checked) {
        boton.removeAttribute('disabled', '')
    }
})

$formulario.addEventListener('submit', (event) => {
    let responce = validar(event, "form [required]")
    const data = {
        firt_name: nombre.value,
        last_name: apellido.value,
        addres: direccion.value,
        phone: telefono.value,
        type_id: tipo_Documento.value,
        document: documento.value,
        email: correo.value,
    }

    if (responce) {
        fetch(`${URL}users`,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UFT-8',
            }
        })
        .then((responce) => responce.json())
        .then((json) =>{
            alert('Sus datos fueron guardados correctamente')
            nombre.value = ''
            apellido.value = ''
            direccion.value = ''
            telefono.value = ''
            correo.value = ''
            tipo_Documento.value = ''
            documento.value = ''
            check.checked = false
            createRow(json)
        })
        .catch(() =>{
            alert('error')
        })
    }

    if (responce) {
        fetch(`${URL}users`,{
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

telefono.addEventListener('blur', () =>{
    cantidad(telefono)
})

nombre.addEventListener('keypress', (event) =>{
    letras(event, nombre)
});
apellido.addEventListener('keypress', (event) =>{
    letras(event, apellido)
});

correo.addEventListener('keypress', (event) =>{
    val_correo(event, correo)
})

document.addEventListener('click', (event) =>{
    if (event.target.matches('.Modificar')) {
        buscar(event.target)
    }
})
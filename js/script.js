const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ ]+$/,
    correo: /^[a-zA-Z0-9_\.+-]+@[a-zA-Z0-9-]+\.\w+(\.\w+)?$/,
    telefono: /^\d{7,14}$/
}

var nombre = false;
var apellido = false;
var correo = false;
var mail = false;
var telefono = false;


var validarFormulario = (e) => {
    switch (e.target.name) {
        case "fname":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('grupo__fname').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__fname').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__fname .formulario__input-error').classList.remove('formulario__input-error-activo');
                nombre = true;
            } else {
                document.getElementById('grupo__fname').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__fname').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__fname .formulario__input-error').classList.add('formulario__input-error-activo');
                nombre = false;
            }

            break;
        case "lname":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('grupo__lname').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__lname').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__lname .formulario__input-error').classList.remove('formulario__input-error-activo');
                apellido = true;
            } else {
                document.getElementById('grupo__lname').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__lname').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__lname .formulario__input-error').classList.add('formulario__input-error-activo');
                apellido = false;
            }
            break;
        case "ciudad":
            if (expresiones.nombre.test(e.target.value)) {
                document.getElementById('grupo__city').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__city').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__city .formulario__input-error').classList.remove('formulario__input-error-activo');

            } else {
                document.getElementById('grupo__city').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__city').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__city .formulario__input-error').classList.add('formulario__input-error-activo');

            }

            break;
        case "mail":
            if (expresiones.correo.test(e.target.value)) {
                document.getElementById('grupo__mail').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__mail').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__mail .formulario__input-error').classList.remove('formulario__input-error-activo');
                correo = true;
            } else {
                document.getElementById('grupo__mail').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__mail').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__mail .formulario__input-error').classList.add('formulario__input-error-activo');
                correo = false;
            }
            break;
        case "phone":
            if (expresiones.telefono.test(e.target.value)) {
                document.getElementById('grupo__phone').classList.remove('formulario__grupo-incorrecto');
                document.getElementById('grupo__phone').classList.add('formulario__grupo-correcto');
                document.querySelector('#grupo__phone .formulario__input-error').classList.remove('formulario__input-error-activo');
                telefono = true;
            } else {
                document.getElementById('grupo__phone').classList.remove('formulario__grupo-correcto');
                document.getElementById('grupo__phone').classList.add('formulario__grupo-incorrecto');
                document.querySelector('#grupo__phone .formulario__input-error').classList.add('formulario__input-error-activo');
                telefono = false;
            }
            break;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();


    if (nombre && apellido && correo && telefono) {
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
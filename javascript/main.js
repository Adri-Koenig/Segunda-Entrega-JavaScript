/* -------------------------------------------------------------------------- */
/*                         Inicio de sesión & Registro                        */
/* -------------------------------------------------------------------------- */
const
    btnSignIn = document.querySelector(".sign-in-btn"),
    btnSignUp = document.querySelector(".sign-up-btn"),
    formulario = document.querySelector(".formulario")
signUp = document.querySelector(".sign-up"),
    signIn = document.querySelector(".sign-in"),
    nombre = document.querySelector("#nombre"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    guardar = document.querySelector("#guardar");


/* -------------------- Mostrar y ocultar el formulario. -------------------- */

document.addEventListener("click", e => {
    if (e.target === btnSignIn || e.target === btnSignUp) {
        signIn.classList.toggle("active");
        signUp.classList.toggle("active");
    }
});

/* ---------------------------------- JSON ---------------------------------- */

// Registro de usuario

function guardarUser(valor) {
    const user = {
        nombre: nombre.value,
        email: email.value,
        pass: password.value
    }
    if (user.nombre == "" || user.email == "" || user.password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Completa los datos correspondientes.'
        })
    } else {

        localStorage.setItem("usuarios", JSON.stringify(user));
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario registrado con éxito',
            showConfirmButton: false,
            timer: 1200
        });
        formulario.reset();
    }
}

// Function al btn.

guardar.addEventListener("click", (e) => {
    e.preventDefault();
    guardarUser();

});

/* ----------------------------- Ingreso al Home ---------------------------- */
const
    emailLog = document.getElementById("emailLog"),
    passwordLog = document.getElementById("passwordLog"),
    ingresar = document.getElementById("ingresar");

function inicioSesion(usuario) {
    (one == emailLog.value && pass == passwordLog.value) ? window.location.href = "./html/news.html": Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Datos no registrados.',
        showConfirmButton: false,
        timer: 1200
    });
}

function recuperarLS() {
    let datosLog = JSON.parse(localStorage.getItem("usuarios"));
    return datosLog;
}

const usuariosLS = recuperarLS();
const {
    email: one,
    pass
} = usuariosLS

console.log(usuariosLS);
console.log(one);
console.log(pass);

ingresar.addEventListener("click", (e) => {
    e.preventDefault();
    inicioSesion(usuariosLS)
});
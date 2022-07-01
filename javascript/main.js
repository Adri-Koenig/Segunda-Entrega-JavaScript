/* -------------------------------------------------------------------------- */
/*                         Inicio de sesión & Registro                        */
/* -------------------------------------------------------------------------- */
const
    btnSignIn = document.querySelector(".sign-in-btn"),
    btnSignUp = document.querySelector(".sign-up-btn"),
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
        return alert("Completa los datos correspondientes.");
    } else {
        localStorage.setItem("item", JSON.stringify(user))
    }

}

// Function al btn.

guardar.addEventListener("click", (e) => {
    guardarUser()
    return alert("Su cuenta ha sido registrada con éxito.")
});

/* ----------------------------- Ingreso al Home ---------------------------- */
const
    emailLog = document.getElementById("emailLog"),
    passwordLog = document.getElementById("passwordLog"),
    ingresar = document.getElementById("ingresar"),
    btnLog = document.getElementById("btnLog"),
    datosLog = JSON.parse(localStorage.getItem("item"));

console.log(datosLog);
console.log(btnLog);
console.log(datosLog.email);
console.log(datosLog.pass);
console.log(ingresar);

ingresar.addEventListener("submit", ()=> {
    location.href('./html/home.html');
})

btnLog.addEventListener("click", () => {
    if (emailLog.value === datosLog.email && passwordLog === datosLog.pass) {
        location.href('./html/home.html');
    }
})

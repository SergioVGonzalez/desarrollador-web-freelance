document.addEventListener("DOMContentLoaded", function () {
  const d = document;
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  // select elements
  const inputEmail = document.querySelector("#email");
  const inputAsunto = document.querySelector("#asunto");
  const inputMensaje = document.querySelector("#mensaje");
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario input[type="submit"]');
  const spinner = document.querySelector("#spinner");

  // events
  inputEmail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  // formulario.addEventListener("submit", enviarEmail);
  // formulario.addEventListener("submit" + "click", enviarEmail);
  formulario.addEventListener("submit click", enviarEmail);

  function enviarEmail(e) {
    e.preventDefault();

    spinner.classList.remove("hidden-spinner");

    setTimeout(() => {
      spinner.classList.add("show-spinner");
      spinner.classList.add("hidden-spinner");

      resetFormulario();

      // Alert
      const alertaExito = d.createElement("p");
      alertaExito.classList.add("form-success");
      alertaExito.textContent = "Mensaje enviado correctamente";

      formulario.appendChild(alertaExito);

      setTimeout(() => {
        alertaExito.remove();
      }, 3000);
    }, 3000);
  }

  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El Campo ${e.target.id} es obligatorio`,
        e.target.parentElement
      );
      email[e.target.name] = "";
      comprobarEmail();

      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es válido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    limpiarAlerta(e.target.parentElement);

    // asign values
    email[e.target.name] = e.target.value.trim().toLowerCase();

    //verify email objet
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // generate html alert
    const error = d.createElement("p");
    error.textContent = mensaje;
    error.classList.add("error-form");

    // inyect html error to the form
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    // comprueba si ya existe una alerta

    const alerta = referencia.querySelector(".error-form");
    if (alerta) {
      alerta.remove();
    }
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("btn-opacity");
      btnSubmit.disabled = true;

      return;
    }
    btnSubmit.classList.remove("btn-opacity");
    btnSubmit.disabled = false;
  }

  function resetFormulario() {
    // reset form objet
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }
});

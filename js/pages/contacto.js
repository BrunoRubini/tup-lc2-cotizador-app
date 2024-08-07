let nombre = document.getElementById("user_name");
let email = document.getElementById("user_email");
let mensaje = document.getElementById("message");
let lblValidacion = document.getElementById("lblValidacion");
let formulario = document.getElementById("contact-form");
function EnviarFormulario() {
  if (!ValidarFormulario()) {
    lblValidacion.innerText = "Debes completar todos los campos.";
    lblValidacion.style.color = "Red";
  }
}
function LimpiarFormulario() {
  formulario.reset();
  lblValidacion.style.display = "none";
}
function ValidarFormulario() {
  if (
    nombre.value.trim() != "" &&
    email.value.trim() != "" &&
    mensaje.value.trim() != ""
  ) {
    return true;
  }
  lblValidacion.style.display = "block";
  return false;
}

/* esta función se encarga de configurar un event listener para el formulario de contacto,
validar los campos del formulario, 
enviar el formulario utilizando EmailJS y mostrar un mensaje de exito o error utilizando sweetalert
*/ 
window.onload = function () {
  document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();
      if (ValidarFormulario()) {
        emailjs.sendForm("contact_service", "contact_form", this).then(
          () => {
            console.log("SUCCESS!");
            Swal.fire({
              title: "Correo enviado",
              text: "El correo se envió correctamente.",
              icon: "success",
              confirmButtonText: "OK",
            });
            LimpiarFormulario();
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      }
    });
};

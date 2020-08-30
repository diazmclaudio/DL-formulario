// Validación solo letras en campo Nombre

let vacio = true;
let parrafo = document.querySelector("p");

let validarRut = () => {
  let rut = document.getElementById("rut").value;
  let pattern = /^0*(\d{1,3}(\.?\d{3})*)\-?([\dkK])$/gim;
  if (rut == "") {
    vacio = false;
    alert("Debe ingresar su Rut");
  } else if (!rut.match(pattern)) {
    vacio = false;
    alert("Debe ingresar un Rut con formato válido");
  }
};

let validaNombre = () => {
  let pattern = /[a-zA-Z ]{2,254}/gi;
  let nombre = document.getElementById("nombre").value;
  if (nombre == "") {
    vacio = false;
    alert("Debe ingresar sus Nombres");
  } else if (!nombre.match(pattern)) {
    vacio = false;
    alert("Campo Nombre no puede contener valores numericos");
  }
};

let validaApellido = () => {
  let pattern = /[a-zA-Z ]{2,254}/gi;
  let apellido = document.getElementById("apellido").value;
  if (apellido == "") {
    vacio = false;
    alert("Debe ingresar sus Apellidos");
  } else if (!apellido.match(pattern)) {
    vacio = false;
    alert("Campo Apellido no puede contener valores numericos");
  }
};

let validaEdad = () => {
  let pattern = /[0-9]/gi;
  let edad = document.getElementById("edad").value;

  if (edad == "") {
    vacio = false;
    alert("Debe ingresar su Edad");
  } else if (!edad.match(pattern)) {
    vacio = false;
    alert("Campo Edad solo puede contener valores numéricos");
  }
};

let validaEmail = () => {
  let email = document.getElementById("email").value;
  let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  if (email == "") {
    vacio = false;
    alert("Debe ingresar su Email");
  } else if (!email.match(pattern)) {
    vacio = false;
    alert("Ingrese un Email valido");
  }
};

let validaFecha = () => {
  let fecha = document.getElementById("fecha").value;
  let pattern = /^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/;

  if (fecha == "") {
    vacio = false;
    alert("Debe ingresar una Fecha");
  } else if (!fecha.match(pattern)) {
    vacio = false;
    alert("Ingrese una Fecha valida");
  }
};

let validar = () => {
  
  vacio = true;
  validarRut();
  validaNombre();
  validaApellido(); 
  validaEdad();
  validaEmail();
  validaFecha();

  if ((vacio == true)) {

   // let idEspecialidad = document.getElementById('especialidad').value;

    let especialidad = document.getElementById('especialidad').value;
    let hora = document.getElementById('hora').value;


    parrafo.innerHTML = `Estimado(a) <b>${nombre.value} ${apellido.value}</b>, su hora para <b>${especialidad}</b> ha sido reservada para el día <b>${fecha.value}</b> a las <b>${hora}</b>. Además, se le envió un mensaje a su correo <b>${email.value}</b> con el detalle de su cita.<br>
      Gracias por preferirnos.`;
  }
};

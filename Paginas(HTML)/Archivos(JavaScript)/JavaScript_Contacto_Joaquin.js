const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input, #formulario textarea');

// Expresiones regulares
const expresiones = {
  n: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  a: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 
  op: /^.{10,300}$/ 
};

const campos = {
  n: false,
  a: false,
  correo: false,
  op: false
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "n":
      validarCampo(expresiones.n, e.target, 'nom');
      break;
    case "a":
      validarCampo(expresiones.a, e.target, 'ape');
      break;
    case "correo":
      validarCampo(expresiones.correo, e.target, 'correo');
      break;
    case "op":
      validarCampo(expresiones.op, e.target, 'op');
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  const grupo = document.getElementById(`grupo__${campo}`);
  if (expresion.test(input.value)) {
    grupo.classList.remove('form__grupo-incorrecto');
    grupo.classList.add('form__grupo-correcto');
    grupo.querySelector('.form__input-error')
    campos[input.name] = true;
  } else {
    grupo.classList.add('form__grupo-incorrecto');
    grupo.classList.remove('form__grupo-correcto');
    grupo.querySelector('.form__input-error')
    campos[input.name] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (campos.n && campos.a && campos.correo && campos.op) {
    alert('Opinión enviada con éxito');
    formulario.reset();
    document.querySelectorAll('.form__grupo-correcto').forEach((grupo) => {
      grupo.classList.remove('form__grupo-correcto');
    });
  } else {
    alert('Por favor completá todos los campos correctamente');
  }
});

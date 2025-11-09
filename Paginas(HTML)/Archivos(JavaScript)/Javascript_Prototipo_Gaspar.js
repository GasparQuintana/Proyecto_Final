let carrito = [];

    function agregarAlCarrito(nombre, precio) {
      carrito.push({ nombre, precio });
      mostrarCarrito();
    }

    function eliminarDelCarrito(index) {
      carrito.splice(index, 1);
      mostrarCarrito();
    }

    function mostrarCarrito() {
      const lista = document.getElementById('lista-carrito');
      lista.innerHTML = '';

      let total = 0;

      carrito.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
          ${item.nombre} - $${item.precio}
          <button onclick="eliminarDelCarrito(${index})">X</button>
        `;
        lista.appendChild(li);
        total += item.precio;
      });

      document.getElementById('total').textContent = 'Total: $' + total;
    }


const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
  n: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
  a: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, 
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  d: /^.{5,60}$/,              
  c: /^\d{4}$/,               
  t: /^\d{16}$/,               
  cs: /^\d{3}$/                
};

const campos = {
  n: false,
  a: false,
  d: false,
  c: false,
  t: false,
  cs: false
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "n":
      validarCampo(expresiones.n, e.target, 'nom');
      break;
    case "a":
      validarCampo(expresiones.a, e.target, 'ape');
      break;
    case "d":
      validarCampo(expresiones.d, e.target, 'dir');
      break;
    case "c":
      validarCampo(expresiones.c, e.target, 'cod');
      break;
    case "t":
      validarCampo(expresiones.t, e.target, 'tar');
      break;
    case "cs":
      validarCampo(expresiones.cs, e.target, 'segu');
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
    grupo.querySelector('.form__input-error').classList.remove('form__input-error-activo');
    campos[input.name] = true;
  } else {
    grupo.classList.add('form__grupo-incorrecto');
    grupo.classList.remove('form__grupo-correcto');
    grupo.querySelector('.form__input-error').classList.add('form__input-error-activo');
    campos[input.name] = false;
  }
};

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const terminos = document.getElementById('terminos');
  if (campos.n && campos.a && campos.d && campos.c && campos.t && campos.cs && terminos.checked) {
    alert('Compra realizada');
    formulario.reset();
    document.querySelectorAll('.form__grupo-correcto').forEach((grupo) => {
      grupo.classList.remove('form__grupo-correcto');
    });
  } else {
    alert('Por favor completá todos los campos correctamente');
  }
});

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
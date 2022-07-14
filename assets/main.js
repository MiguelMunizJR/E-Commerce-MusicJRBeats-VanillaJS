/* Selectores */
const cart = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container');
const countCart = document.querySelector('.circle span');
const carTotal = document.querySelector('.car-total span');
const cartTotal = document.querySelector('.cart-total span');
// const closeCart = document.querySelector('.fa-xmark');

/* Carrito Array */
let carrito = [];

/* Funciones */

/* Agregar producto al carrito Array */
const agregarCarrito = (e) => {
    
    const producto = {
        titulo: e.target.dataset.producto,
        id: e.target.dataset.id,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }

    
    const existe = carrito.findIndex((i) => i.id === producto.id);
    
    if (existe === -1) {
        carrito.push(producto);
    } else {
        carrito[existe].cantidad ++;
    };

    carrito.forEach(i => {

    });

    pintarCarrito();
};

/* Mostar productos en al carrito DOM */
const pintarCarrito = () => {
    cartContainer.textContent = "";
    let html = "";
    
    carrito.forEach(i => {
        html += `<article class="cart-card">
            <h3 class="cart-title">${i.titulo}</h3>
            <div class="cart-d">
            <p class="cart-amount">Cantidad:<span>${i.cantidad}</span></p>
            <h4 class="cart-price">$<span>${new Intl.NumberFormat('es-MX').format(i.precio * i.cantidad)}</span></h4>
            </div>
            <div class="cart__btns">
            <input type="button" value="Agregar" class="cart-card__btn card-add" data-id="${i.id}"><input type="button" value="Quitar" class="cart-card__btn card-clear" data-id="${i.id}">
            </div></article>`;
    });

    cartContainer.innerHTML = html;
    pintarCantidad();
    pintarTotal();
};

/* Mostar cantidad en ícono de carrito */
const pintarCantidad = () => {
    let contador = carrito.reduce(
        (acc, current) => acc + current.cantidad, 0
    );
     
    countCart.textContent = contador;
};

/* Mostar total de carrito DOM */
const pintarTotal = () => {
    let total = carrito.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 0);

    total = new Intl.NumberFormat('es-MX').format(total);
    carTotal.textContent = total;
    cartTotal.textContent = total;
};  

/* Agregar producto desde carrito DOM */
const cardAdd = (e) => {
    carrito = carrito.map(i => {
        if (i.id === e.target.dataset.id) {
            i.cantidad++;
        }
        return i;
    })

    pintarCarrito();
};

/* Eliminar producto desde carrito DOM */
const cardClear = (e) => {

    carrito.forEach((item) => {
        if (item.id === e.target.dataset.id) {
            if (item.cantidad >= 1) {
                item.cantidad --;
                if (item.cantidad === 0) {
                    alert('esta en cero...');
                    
                }
            }
        } else {
            return item;
        }
    });

    pintarCarrito();
    pintarTotal();
};

/* Comprar productos de carrito DOM */
const comprarCarrito = (e) => {
    total = 0;
    cartContainer.innerHTML = "";
    contador = 0;
    countCart.innerHTML = 0;
    carrito.splice(0);
    cart.style.display = 'none';
    pintarCarrito();
    alert("Gracias por su compra! 😉");
}

/* Limpiar carrito DOM */
const limpiarCarrito = (e) => {
    total = 0;
    cartContainer.innerHTML = "";
    contador = 0;
    countCart.innerHTML = 0;
    carrito.splice(0);
    pintarCarrito();
}

/* Delegacion de Eventos */
document.addEventListener('DOMContentLoaded', (i) => {

    document.addEventListener('click', (e) => {

        /* Carrito desplegable */
        if (e.target.matches('.fa-cart-shopping')) {
                if (cart.style.display === 'flex') {
                    cart.style.display = 'none';
                } else {
                    cart.style.display = 'flex';
                }
          
        };

         /* Cerrar Carrito DOM*/
        if (e.target.matches('.fa-xmark')) {
            cart.style.display = 'none';
        }

        /* Botón de Cart-Card ADD*/
        if (e.target.matches('.card-add')) {
            cardAdd(e);
        }

        /* Botón de Cart-Card CLEAR*/
        if (e.target.matches('.card-clear')) {
            cardClear(e);
        }

        /* Botones de Card */
        if (e.target.matches('.card-btn')) {
            agregarCarrito(e);
        }

        /* Boton Comprar */
        if (e.target.matches('.add')) {
            if (carrito.length == 0) {
                alert('Su carrito esta vacío!😕 Agrégue productos.')
            } else {
                comprarCarrito(e);
            }
        }

        /* Boton Limpiar */
        if (e.target.matches('.clear')) {
            limpiarCarrito(e);
        }



    });
});




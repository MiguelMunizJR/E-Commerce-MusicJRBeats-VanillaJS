
const cart = document.querySelector('.cart')
const cartContainer = document.querySelector('.cart-container');
const countCart = document.querySelector('.count-cart');


const carrito = []
const productos = [
    {
        titulo: "Trompeta Yamaha",
        imagen: "/assets/images/Trumpet.png",
        precio: 12000,
        cantidad: 0,
        id: 1,
    },
    {
        titulo: "Batería Pearl",
        imagen: "/assets/images/Battery.png",
        precio: 18500,
        cantidad: 0,
        id: 2,
    },
    {
        titulo: "Bajo Ibañez",
        imagen: "/assets/images/Electric Bass.png",
        precio: 5000,
        cantidad: 0,
        id: 3,
    },
    {
        titulo: "Violín Yamaha",
        imagen: "/assets/images/Violín.png",
        precio: 7200,
        cantidad: 0,
        id: 4,
    },
]

document.addEventListener('DOMContentLoaded', (i) => {
    i.preventDefault();

    document.addEventListener('click', (e) => {
        const target = e.target;

        /* Carrito desplegable */
        if (target.matches('.fa-cart-shopping')) {

            if (cart.style.display == 'none') {
                cart.style.display = 'flex';
            } else {
                cart.style.display = 'none';
            }
        }

        /* Botones de Card */
        if (target.matches('.card-btn')) {
            agregarCarrito(target);
            pintarCarrito(target);
        }

        /* Boton Comprar */
        if (target.matches('.add')) {
            if (carrito.length == 0) {
                alert('Su carrito esta vacío!😕 Agrégue productos.')
            } else {
                comprarCarrito(target);
            }
        }

        /* Boton Limpiar */
        if (target.matches('.clear')) {
            limpiarCarrito(target);
        }

    });
});

/* Funciones */

const agregarCarrito = (e) => {
    
    productos.forEach(item => {
        if (item.id == e.dataset.id) {
            carrito.push(item);
        }
    });
};

const pintarCarrito = (e) => {
    let html = ``
    
    carrito.forEach(item => {
        
        html += `<article class="cart-card">
        <div class="cart-img">
        <img src=${item.imagen} alt="trompeta" width="100%">
        </div>
        <h3 class="${item.titulo}">Trompeta Yamaha</h3>
        <div class="cart-d">
        <p class="cart-amount">Cantidad: <span>${item.cantidad}</span></p>
        <h4 class="cart-price">$<span>${item.precio}</span></h4>
        <input type="button" value="Quitar" class="cart-card__btn">
            </div>
            </article>`
        
        });
        
        countCart.innerHTML = carrito.length;
    cartContainer.innerHTML = html;
};

const comprarCarrito = (e) => {
    cartContainer.innerHTML = "";
    countCart.innerHTML = 0;
    carrito.splice(0);
    alert("Gracias por su compra! 😉");
}

const limpiarCarrito = (e) => {
    cartContainer.innerHTML = "";
    countCart.innerHTML = 0;
    carrito.splice(0);
}


console.log(carrito);
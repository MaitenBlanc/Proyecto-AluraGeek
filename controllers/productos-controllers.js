import "../servicios/productos-servicios.js";

// const contenedorProductos = document.querySelector(".productos");
// // const tituloProductos = document.querySelector(".productos__titulo");
// // let botonesVer = document.querySelector(".productos__ver");
    
// document.body.onload = nuevoProducto;

const productos = document.querySelector('[productos]');

const nuevoProducto = (name, imagenUrl, price, id) => {
    
    const card = document.createElement("div");
    const contenido = `
        <div class = "producto__nuevo">
            <img class="productos__imagen" src="${imagenUrl}" alt="${name}">
            <h3 class="productos__titulo">${name}</h3>
            <p class="productos__precio">${price}</p>
            <a class = "productos__ver" href = "../producto.html?id=${id}">Ver Producto</a>
        </div>`

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

productos.appendChild(nuevoProducto());

productos.addEventListener("online", nuevoProducto());



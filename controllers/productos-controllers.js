// import { productosServicios } from "../servicios/productos-servicios.js";

// const contenedorProductos = document.getElementsByClassName("producto__nuevo");
// const productoImagen = document.getElementsByClassName("productos__imagen");
// const tituloProductos = document.getElementsByClassName("productos__titulo");
// const precioProductos = document.getElementsByClassName("productos__precio");
// let botonesVer = document.getElementsByClassName("productos__ver");

const nuevoProducto = (name, imageUrl, price, id) => {
    const card = document.createElement("div");
    const contenido = `<div class="producto__nuevo">
        <img class="producto__imagen" src="${imageUrl}" alt="${name}">
        <h3 class="producto__titulo">${name}</h3>
        <p class="producto__precio">${price}</p>
        <a class="producto__ver" href="../producto.html?id=${id}">Ver Producto</a>
    </div>`

    card.innerHTML = contenido;
    card.dataset.id = id;

    return card;
};

const productos = document.getElementById("data-productos");

const descripcionProducto = (name, imageUrl, precio, id) => {
    `<div class="producto__descripcion">
        <img class="producto__imagen" src="${imageUrl}" alt="${name}">
        <h3 class="producto__titulo">${name}</h3>
        <p class="producto__precio">${price}</p>
        
    </div>`
};

// SEGUIRRRRR!!!!!!!!!!!!!!!!!!!!
export const productosNuevos = {
    nuevoProducto,
    productos,
};

// import { productosServicios } from "../servicios/productos-servicios.js";

// const contenedorProductos = document.getElementsByClassName("producto__nuevo");
// const productoImagen = document.getElementsByClassName("productos__imagen");
// const tituloProductos = document.getElementsByClassName("productos__titulo");
// const precioProductos = document.getElementsByClassName("productos__precio");
// let botonesVer = document.getElementsByClassName("productos__ver");

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

const productos = document.querySelectorAll('[data-product]');

export const productosNuevos = {
    nuevoProducto,
    productos
}
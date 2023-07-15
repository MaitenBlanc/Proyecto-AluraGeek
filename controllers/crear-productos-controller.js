import { productosServicios } from "../servicios/productos-servicios.js";

const form = document.querySelector('[data-form]');

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const name = document.querySelector('[data-name]').value;
    const price = document.querySelector('[data-price]').value;

    productosServicios.crearProductos(url, name, price);
});
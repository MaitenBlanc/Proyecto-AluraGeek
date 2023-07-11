import { productosNuevos } from "../controllers/productos-controllers.js";

// GET
const http = new XMLHttpRequest();

http.open('GET', 'http://localhost:3000/productos');

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data)
    data.forEach(async productos => {
        const crearNuevoProducto = nuevoProducto(productos.name, productos.imagenUrl, productos.price, productos.id);
        productos.appendChild(crearNuevoProducto);
    });
};

const listaProductos = () => {
    fetch("http://localhost:3000/productos")
        .then(response => response.json())
        .then(data => {
            listaProductos = data;
            // cargarProductos(listaProductos);
            console.log(data);
        })
        .catch(error => {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
        });
}

//POST

// const crearProductos = () => {

// };

export const productosServicios = {
    listaProductos
};

import { productosNuevos } from "../controllers/productos-controllers.js";

// GET
const http = new XMLHttpRequest();

http.open('GET', 'https://raw.githubusercontent.com/MaitenBlanc/Proyecto-AluraGeek/master/db.json');

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data)
    data.forEach(prod => {
        const crearNuevoProducto = productosNuevos.nuevoProducto(prod.name, prod.imageUrl, prod.price, prod.id);
        //let productoss = document.getElementById("data-prod");
        //productoss.appendChild(crearNuevoProducto);
        if(productosNuevos.productos) productosNuevos.productos.appendChild(crearNuevoProducto);
    });
};

const listaProductos = () => {
    fetch(`https://raw.githubusercontent.com/MaitenBlanc/Proyecto-AluraGeek/master/db.json`)
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
const crearProductos = (imageUrl, name, price) => {
    console.log("Entra a crearProductos");
    fetch(`https://raw.githubusercontent.com/MaitenBlanc/Proyecto-AluraGeek/master/db.json`, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imageUrl,
            price,
            name
        })
    })
        .then(respuesta => {
            if (respuesta.ok) {
                window.location.href = "../index.html";
            }
        })
        .catch(error => {
            throw new Error("No se pudo crear el producto")
        })
};

export const productosServicios = {
    listaProductos,
    crearProductos
};

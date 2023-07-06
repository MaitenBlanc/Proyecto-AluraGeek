const listaProductos = () => {
    fetch("http://localhost:3000/productos")
        .then(response => response.json())
        .then(data => {
            listaProductos = data;
            cargarProductos(listaProductos);
            // console.log(data);
        })
        .catch(function(error) {
            console.log('Hubo un problema con la petición Fetch:' + error.message);
          });
    }
    
export const productosServicios = {
    listaProductos
}
    
    
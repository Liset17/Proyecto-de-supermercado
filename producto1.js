document.addEventListener("DOMContentLoaded", () => {
    const producto = document.querySelector(".articulo");
    const contadorGlobal = document.getElementById("contador-carrito");
    
    const btnAgregar = producto.querySelector(".btn-agregar");
    const btnEliminar = producto.querySelector(".btn-eliminar");
    const contadorProducto = producto.querySelector(".contador-producto");
    const stockVisual = document.getElementById("visual-stock");

    // VARIABLES DE ESTADO
    let cantidadSeleccionada = 0;
    //stock inicial
    const stockInicial = parseInt(stockVisual.textContent); 
    let totalCarrito = parseInt(contadorGlobal.textContent);

    // FUNCION DE RENDERIZADO 
    const render = () => {
        // Actualiza cuántos quieres comprar
        contadorProducto.textContent = cantidadSeleccionada;
        
        // Actualiza el carrito de arriba
        contadorGlobal.textContent = totalCarrito;

        //restamos la seleccion al stock inicial
        stockVisual.textContent = stockInicial - cantidadSeleccionada;
    };

    btnAgregar.addEventListener("click", () => {
    
        if (cantidadSeleccionada < stockInicial) {
            cantidadSeleccionada++;
            totalCarrito++;
            render();
        } else {
            alert("¡Lo sentimos! No queda más producto disponible.");
        }
    });

    btnEliminar.addEventListener("click", () => {
        if (cantidadSeleccionada > 0) {
            cantidadSeleccionada--;
            totalCarrito--;
            render();
        }
    });
});
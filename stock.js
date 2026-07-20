document.addEventListener("DOMContentLoaded", () => {
    const STOCK_MAXIMO = 13;
    let totalCarrito = 0;
    const contadorCarrito = document.querySelector(".contador-carrito");

    if (!contadorCarrito) {
        console.error("No se encontró .contador-carrito en el HTML");
        return;
    }

    // seleccionamos todas las galerias 
    document.querySelectorAll(".galeria").forEach(galeria => {
        // variables locales para cada producto individual
        let stockDisponible = STOCK_MAXIMO;
        let cantidadProducto = 0;

        const btnAgregar = galeria.querySelector(".btn-agregar");
        const btnEliminar = galeria.querySelector(".btn-eliminar");
        const contadorProducto = galeria.querySelector(".contador-producto");

        if (!btnAgregar || !btnEliminar || !contadorProducto) {
            console.warn("Faltan elementos en una de las galerías");
            return;
        }

        //   LOGICA DE AGREGAR  
        btnAgregar.addEventListener("click", () => {
            if (stockDisponible > 0) {
                stockDisponible--;
                cantidadProducto++;
                totalCarrito++;
                
                actualizarInterfaz();
            } else {
                alert("Lo sentimos, no hay más stock disponible.");
            }
        });

        //   LOGICA DE ELIMINAR     
        btnEliminar.addEventListener("click", () => {
            if (cantidadProducto > 0) {
                stockDisponible++;
                cantidadProducto--;
                totalCarrito--;
                
                actualizarInterfaz();
            }
        });

     
        function actualizarInterfaz() {
            contadorProducto.textContent = cantidadProducto;
            contadorCarrito.textContent = totalCarrito;
        }
    });
});
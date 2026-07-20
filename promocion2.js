// precio inicial
let precioOriginal = 102.50;

// elementos del dom
const textoPrecio = document.getElementById("precio-oferta");
const botonDescuento = document.getElementById("btn-descuento");

//evento de clic
botonDescuento.addEventListener("click", function() {

    // calculamos el 20% de descuento
    const descuento = 0.20;
    const precioFinal = precioOriginal * (1 - descuento);

    //actualizamos el HTML con el precio nuevo 
    textoPrecio.textContent = `Precio de Oferta € ${precioFinal.toFixed(2)}`;

    //  desactiva el boton para que no se aplique varias veces el descuento
    botonDescuento.disabled = true;
    botonDescuento.textContent = "¡Descuento Aplicado!";
});
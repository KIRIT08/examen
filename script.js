function abrirPcLaptops() {
    let yaIngreso = localStorage.getItem("pcLaptopsVisitado");

    if (yaIngreso === "si") {
        document.getElementById("modalSeleccion").style.display = "flex";
    } else {
        document.getElementById("modalBienvenida").style.display = "flex";
    }
}

function aceptarBienvenida() {
    localStorage.setItem("pcLaptopsVisitado", "si");

    document.getElementById("modalBienvenida").style.display = "none";
    document.getElementById("modalSeleccion").style.display = "flex";
}

function irAVentas() {
    window.location.href = "ventas.html";
}

function mostrarCompra(nombre, precio) {
    document.getElementById("nombreLaptop").textContent = nombre;
    document.getElementById("precioLaptop").textContent = precio;

    document.getElementById("modalCompra").style.display = "flex";
}

function cerrarCompra() {
    document.getElementById("modalCompra").style.display = "none";
}
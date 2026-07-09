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
    let producto = document.getElementById("productoSeleccionado").value;

    window.location.href = "ventas.html?producto=" + producto;
}
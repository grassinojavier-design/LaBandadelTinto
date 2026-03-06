function mostrar(seccion){

let contenidos = document.querySelectorAll(".contenido");

contenidos.forEach(function(sec){

sec.classList.remove("activo");

});

document.getElementById(seccion).classList.add("activo");

}

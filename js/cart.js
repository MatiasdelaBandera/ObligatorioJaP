//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function nombreUsuarioF () {
    if (nombreUsuario = null) {
        nombreUsuario === "Usuario"
    }else {
        nombreUsuario = localStorage.getItem('nombre-Usuario')
    }
    return nombreUsuario
}

nombreUsuarioF();

let htmlContentToAppend = "";
htmlContentToAppend += nombreUsuario //+ `<img src" ` + imgUsuario + ` ">`

document.getElementById("nombreUsuario").innerHTML = nombreUsuario;


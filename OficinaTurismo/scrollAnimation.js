// Se activa cada vez que se scrollea
window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    // Los recorremos comprobando su distancia a la parte de arriba de la pantalla
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight; // Altura de la ventana
        var elementTop = reveals[i].getBoundingClientRect().top; // Altura del elemento
        var elementVisible = 150; // Altura a la que se debe mostrar

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else { // Quitale esto para que no se vuelva a esconder al scrollear arriba
            reveals[i].classList.remove("active");
        }
    }
}
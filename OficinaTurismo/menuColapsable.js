$(document).ready(function () { /* Cuando el documento cargue */
    // Cuando haga click en las 3 barritas
    $(".menu-toggle").click(function () {
        $(".header-right").toggleClass("show"); /* Si esta la clase la quita, si no la tiene la pone */
        $(".bar:nth-child(1)").toggleClass("rotate-45");
        $(".bar:nth-child(2)").toggleClass("hide");
        $(".bar:nth-child(3)").toggleClass("rotate45");
    });
});
/* Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript. */


$("#menu").click(function() {
    if($("#side-bar").is(":visible")) {
        $("#side-bar").fadeOut(2000);
    } else {
        $("#side-bar").fadeIn(2000);
    }
})
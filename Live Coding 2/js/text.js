/* Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio. */

$("#live-coding").hide(0);

$("#cerchio").mouseenter(function() {
    $("#live-coding").show(2000);
})
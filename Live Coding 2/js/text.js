/* Rendere visibile la scritta “Live Coding” dentro il cerchio arancione quando passo con il mouse sul cerchio. */


$("#cerchio").mouseenter(function() {
    $("#live-coding").show(2000);
})
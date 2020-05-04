/* Creare il titolo di un paragrafo e un bottone che permette di espandere il testo inizialmente nascosto */

$("#sottotitolo").hide(0, function () {
    console.log("elemento nascosto");
});


$('#testo').click(function() {
    if($("#sottotitolo").is(":visible")) {
        $('#testo').text('Mostra testo');
        $("#sottotitolo").hide(2000, function () {
        console.log("Elemento nascosto");
    });
    } else {
        $("#testo").text("Nascondi testo"); 
        $("#sottotitolo").show(2000, function () {
            console.log("Elemento mostrato");
        })
    }
})




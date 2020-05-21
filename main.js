// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").


$(document).ready(function() {

    var dischi_musicali = [];

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data) {

            dischi_musicali = data.response;
            console.log(dischi_musicali);

            for (var i = 0; i < dischi_musicali.length; i++) {
                console.log(dischi_musicali[i]);
            }
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });

    // for (var i = 0; i < dischi_musicali.length; i++) {
    //     console.log(dischi_musicali[i]);
    // }


});

// Con una chiamata ajax, recuperare i dischi musicali restituiti dall'api:
// https://flynn.boolean.careers/exercises/api/array/music
// Ciclare quindi i dischi e ottenuti e per ognuno di essi disegnare in pagina una card utilizzando handlebars.
// BONUS: creare una select con i generi dei dischi musicali (pop, rock, metal, jazz), tramite la quale si possono filtrare i dischi visualizzati (ad esempio: se nella tendina si seleziona il genere "metal", nella pagina saranno mostrati solo i dischi con il genere "metal").


$(document).ready(function() {

    var dischi_musicali = [];

    var template_html = $('#card-cd').html();

    var template_function = Handlebars.compile(template_html);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/array/music',
        method: 'GET',
        success: function(data) {

            dischi_musicali = data.response;
            console.log(dischi_musicali);

            for (var i = 0; i < dischi_musicali.length; i++) {

                console.log(dischi_musicali[i]);

                var cd_corrente = dischi_musicali[i];

                var cd = {
                    poster: cd_corrente.poster,
                    title:  cd_corrente.title,
                    author: cd_corrente.author,
                    genre: cd_corrente.genre,
                    year: cd_corrente.year
                }

                console.log(cd);

                var html_finale = template_function(cd);
                $('.container').append(html_finale);
            }
        },
        'error': function() {
            alert('si è verificato un errore');
        }
    });


});

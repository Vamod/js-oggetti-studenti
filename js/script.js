/*Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
Stampare a schermo attraverso il for in tutte le proprietà.
Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
Usate prima i console.log e poi provare a stampare con jQuery:*/


$(document).ready(function(){
    //Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
    var studente = {
        'nome' : 'Simone',
        'cognome' : 'Rossi',
        'eta' : 34
    }
    // Stampare a schermo attraverso il for in tutte le proprietà.
    for (var k in studente) {
        console.log(k + ': ' + studente[k]);
    }

    //Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
    var studenti = [
        {
            'nome' : 'Simone',
            'cognome' : 'Rossi',
            'eta' : 34
        },
        {
            'nome' : 'Francesco',
            'cognome' : 'Bianchi',
            'eta' : 30
        },
        {
            'nome' : 'Maria',
            'cognome' : 'Verde',
            'eta' : 24
        }
    ];

    for (var i = 0; i < studenti.length; i++) {
        for (var key in studenti[i]) {
            console.log(studenti[i][key].nome);
        }
    }
});

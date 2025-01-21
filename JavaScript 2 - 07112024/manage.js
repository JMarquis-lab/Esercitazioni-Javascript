/*

ESERCIZIO 1

Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:

se v e’ minore di 18,  stampare in console  “insufficiente”
se v e’ maggiore uguale a 18 e minore di 21,  stampare in console “sufficiente”
se v e’ maggiore uguale a 21 e minore di 24,  stampare in console: “buono”
se v e’ maggiore uguale a 24 e minore di 27, stampare in console: “distinto”
se v e’ maggiore uguale a 27 e minore uguale 29, stampare in console: “ottimo”
se v e’ uguale a 30, stampare in console:  “eccellente”
Esempio:
let v = 29;
Output: Ottimo
Cercate di risolvere questo esercizio utilizzando prima if, else e poi con switch.

*/

let voto = 27;

// Versione con if-else
if(voto < 18 )
    console.log("Insufficiente");
else if(voto >=18 && voto < 21)
    console.log("Sufficiente");
else if(voto >=21 && voto < 24)
    console.log("Buono");
else if(voto >=24 && voto < 27)
    console.log("Distinto");
else if(voto >=27 && voto < 29)
    console.log("Ottimo");
else if(voto == 30)
    console.log("Eccellente");

// Versione con lo Switch
switch(true){
    case voto < 18:
        console.log("Insufficiente");
        break;
    case voto >=18 && voto < 21:
        console.log("Sufficiente");
        break;
    case voto >=21 && voto < 24:
        console.log("Buono");
        break;
    case voto >=24 && voto < 27:
        console.log("Distinto");
        break;
    case voto >=27 && voto < 29:
        console.log("Ottimo");
        break;
    case voto == 30:
        console.log("Eccellente");
        break;
    default:
        console.log("Voto non valido. Inserisci un voto tra 0 e 30"); 
    }

/*
ESERCIZIO 2

Scrivi un programma che converta una temperatura inserita dall’utente con una delle seguenti descrizioni, stampate in console:

se temperatura e’ minore di 20, stampare “non ci sono piu’ le mezze stagioni”
se temperatura e’ maggiore uguale a 30, stampare “lu mare, lu sule e lu ientu”
se temperatura e’ minore di 30, stampare “mi dia una peroni sudata”
se temperatura e’ minore di 0, stampare “non e’ tanto il freddo quanto l’umidità’”
se temperatura e’ minore di -10, stampare “copriti…ancora ti raffreddi”
Cerca di risolvere questo esercizio utilizzando prima if else e poi con switch case.
*/

let temp = 27;

// Versione con if-else
if(temp < -10 )
    console.log("copriti…ancora ti raffreddi");
else if(temp < 0)
    console.log("non è tanto il freddo quanto l'umidità");
else if(temp < 20)
    console.log("non ci sono più le mezze stagioni");
else if(temp < 30)
    console.log("mi dia una peroni sudata");
else if(temp >= 30)
    console.log("lu mare, lu sule e lu ientu");

// Versione con lo Switch
switch(true){
    case temp < -10:
        console.log("copriti…ancora ti raffreddi");
        break;
    case temp < 0:
        console.log("non è tanto il freddo quanto l'umidità");
        break;
    case temp < 20:
        console.log("non ci sono più le mezze stagioni");
        break;
    case temp < 30:
        console.log("mi dia una peroni sudata");
        break;
    case temp >= 30:
        console.log("lu mare, lu sule e lu ientu");
        break;
    default:
        console.log("Temperatura non valida. Si prega di controllare."); 
    }
/*
ESERCIZO 3

Scrivi un programma che dato un numero, let num = 2, stampi la rispettiva tabellina corrispondente.

*/

let num = 2; // stampa la tabellina del 2. Cambiare per ottenere altre tabelline.

for(let i = 0; i <= 10; i++){
    console.log( num * i );
    
}


/*
ESERCIZIO 4

Scrivi un programma che stampi dei numeri da 1 a 20 ma solo quelli pari. Di tutti i numeri dispari, invece, calcola anche la media e stampala a schermo.
*/

let somma = 0;
let media;
let counter=0;
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    } else {
        somma = somma + i;
        counter++;
    }
}
media = somma / parseFloat(counter);
console.log(`La media dei primi ${counter} numeri dispari è ${media}`);



/*
ESERCIZIO 5

Scrivi un programma che simuli un distributore di bevande e che rispetti i seguenti passaggi:

l’utente deve poter inserire un numero
in console dev’essere stampato il messaggio del distributore
se inserisce 1, seleziona acqua e quindi stampare in console: “E’ stata selezionata l’acqua”
se inserisce 2, seleziona coca cola e quindi stampare in console: “E’ stata selezionata coca cola”
se inserisce 3, seleziona birra e quindi stampare in console: “E’ stata selezionata birra”
se inserisce qualcosa di diverso, il programma dovra’ riproporre automaticamente la domanda di partenza
 */

let n = 0;

do {

n = prompt(`Inserisci il codice della bevanda`);

switch (n) {
    case '1':
        console.log(`E' stata selezionata l'acqua`);
        break;
    case '2':
        console.log(`E' stata selezionata coca cola`);
        break;
    case '3':
        console.log(`E' stata selezionata birra`);
        break;
    default:
        alert(`Il codice selezionato è sbagliato. Seleziona 1, 2 o 3 oppure 0 per uscire`)
        break;
}

} while (n != 0);
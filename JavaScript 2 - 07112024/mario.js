/*

    Creare un programma che simuli il gioco Super Mario Bros.

*/

let startGame = prompt("Sei pronto? \n (1) Inizia la partita \n (2) Esci dal gioco");

let life = 2;
let points = 0;

let tipiNemici = [ "una Tartaruga" , "una Rana", " un Proiettile", "un Funghetto" ];


while (startGame != '1' && startGame != '2') {

    startGame = prompt("Sei pronto? \n (1) Inizia la partita \n (2) Esci dal gioco");

}



if(startGame === '1') {

    alert("Partita iniziata");
    let enemy;

    while ( life > 0 && enemy != 3){

    let nemico = tipiNemici[randomInteger(0,3)];
    console.log(nemico);
    

    enemy = prompt(`${life} vite residue! \n Punti: ${points} \n Attento c'e' ${nemico}! Premi: \n (1) Corri, salta ed evitalo \n (2) Salta sopra al nemico ed eliminalo \n (3) Forza chiusura del gioco`);

    let result = randomInteger(0,100);

    console.log(result);
    
    switch (enemy) {

        case '1':

            if( result > 25 ){
                alert(`C'e' mancato poco! Sei riuscito a saltare oltre il nemico`);
                points += 100;
            }
            else{
                alert("Purtroppo non sei riuscito a saltare oltre il nemico e hai perso una vita");
                life--;
            }

            break;

        case '2':

            if( result > 35 ){
                alert(`Ottimo! sei riuscito a schiacciare il nemico`);
                points += 75;
            }
            else{
                alert("Non hai preso il giusto tempismo e hai perso una vita");
                life--;
            }
            break;
        
            case '3':
                break;

        default:

            alert(`Inserisci una scelta tra 1 e 3`);

            break;

    }
}
    alert(`La partita è finita con un punteggio di ${points}`);

} else {

    alert(`Ci vediamo la prossima, peccato che tu non voglia giocare oggi!`);

}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
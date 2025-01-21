/* Crea un oggetto bowling con le seguenti caratteristiche:

una proprietà che comprenda una lista di giocatori con un nome e i relativi punteggi
diverse funzionalità tra cui:
creare 10 punteggi casuali per ogni giocatore:
Suggerimento: questo metodo dovra’ ciclare tutti i giocatori, presenti nell’oggetto bowling, e aggiungere ad ogni proprieta’ scores, dieci punteggi casuali ad ogni giocatore
Per generare un punteggio casuale da 1 a 10 → Math.floor(Math.random() * (10 - 1 +1) + 1)
trovare il punteggio finale per ogni giocatore:
Suggerimento: ordinare l’array in ordine Decrescente (Attenzione! E’ un array di oggetti: Array.prototype.sort() - JavaScript | MDN )
aggiungere un nuovo giocatore e creare 10 punti casuali anche per lui determinare il vincitore

EXTRA:
Crea un metodo per stilare la classifica finale dei giocatori */

let bowling = {

    players: [

        {'name': 'Livio', 'scores': []},
        {'name': 'Paola', 'scores': []},
        {'name': 'Filippo', 'scores': []},
        {'name': 'Giuseppe', 'scores': []}

    ],

    setFinalScore: function () {

        this.players.forEach((player) => {
            player.finalScore = player.scores.reduce((acc, n) => acc + n, 0)
        })

    },

    setScores: function (tiri) {

        this.players.forEach((player) => {

            for (let i = 1; i <= tiri; i++) {
                player.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
            }
        })
    },

    addPlayer: function (nome, tiri) {
        giocatore = {
            name : nome,
            scores : []
        }

        for (let i = 1; i <= tiri; i++) {
            giocatore.scores.push(Math.floor(Math.random() * (10 - 1 +1) + 1));
        }

        this.players.push(giocatore);
    },


    setWinner: function () {

       let  sorted = this.players.sort((a, b) => b.finalScore - a.finalScore);

       let winners = [];
       let maxScore = sorted[0].finalScore;
       sorted.forEach((player)=>{
        if(player.finalScore==maxScore)
            winners.push(player);
       });
        console.log(`numero vincitori ${winners.length}`);
        if(winners.length == 1)
            console.log(`Il vincitore e' ${winners[0].name} con un punteggio di ${winners[0].finalScore}`);
        else{
            let nomiVincitori = ``;
            winners.forEach((player)=> {
                nomiVincitori = nomiVincitori + ' ' + player.name;
            });
            console.log(`I vincitori sono:${nomiVincitori} con un punteggio di ${winners[0].finalScore}`);
            
        }
            
        
    },


    setRank: function() {
        console.log('La classifica é :');

        let sorted = this.players.sort((a, b) => b.finalScore - a.finalScore);

        let index = 1;
        for (let i = 0; i < sorted.length; i++) {
            console.log(`${index} - ${sorted[i].name}`);

            if (i < sorted.length - 1) {
                if (sorted[i].finalScore > sorted[i + 1].finalScore) {
                    index++;
                }
            }
        }
    }
}

console.log(bowling);

bowling.setScores(10);
bowling.addPlayer(`Annalisa`,10);
bowling.setFinalScore();
bowling.setWinner();
bowling.setRank();
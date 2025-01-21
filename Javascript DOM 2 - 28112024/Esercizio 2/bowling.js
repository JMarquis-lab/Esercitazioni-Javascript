/* Crea una pagina web per gestire una partita di bowling. L'applicazione deve permettere di:

Aggiungere giocatori.
Generare dei punteggi casuali al click di un pulsante.
Visualizzare la lista dei giocatori con i loro punteggi.
Calcolare e visualizzare il vincitore.
Visualizzare una classifica ordinata in base al punteggio.
 */

let addPlayer = document.querySelector('#addPlayer');
let generateScores = document.querySelector('#generateScores');
let checkWinner = document.querySelector('#checkWinner');

let wrapper = document.querySelector('.wrapper');
let winnerWrapper = document.querySelector('.winnerWrapper');


let Bowling = {

    players: [

        {nick: 'Joseph', nome: 'Giuseppe', punteggi: [], totale: 0},
        {nick: 'Star', nome: 'Maria', punteggi: [], totale: 0},
        {nick: 'Nicholas', nome: 'Victoria', punteggi: [], totale: 0},
        {nick: 'Grandangolo', nome: 'Martino', punteggi: [], totale: 0},
    ],

    showPlayers: function(){
        wrapper.innerHTML='';
        this.players.forEach((elemento)=>{
            let div = document.createElement('div');
            div.classList.add('col-12','col-md-3');

            div.innerHTML = `
            <div class="card" style="width: 18rem;">
                <div class="card-body cardCustom">
                    <h5 class="card-title">${elemento.nick}</h5>
                    <h6 class="card-subtitle mb-2 text-body-secondary">${elemento.nome}</h6>
                    <p class="card-text">${elemento.punteggi}</p>
                    <p class="card-text">TOTALE: <strong>${elemento.totale}</strong></p>
                </div>
            </div>
            `; 
            wrapper.appendChild(div);
        })
    },

    generateScores: function(){
        this.players.forEach((elemento)=>{
            elemento.punteggi = generaPunteggi();
            elemento.totale = elemento.punteggi.reduce((acc,n)=> acc+n);
            winnerWrapper.innerHTML = '';
        })
    },

    addPlayer: function(nick, nome){
        this.players.push({nick: nick, nome: nome,punteggi: [], totale: 0});
    },

    checkWinner: function(){
        winnerWrapper.innerHTML = '';
        this.players.sort((a,b)=>b.totale-a.totale);
        let winner = this.players[0];
        let div = document.createElement('div');
        let classifica = this.generateList();
        div.innerHTML=`
            <div class="card text-center winnerCard">
            <div class="card-header">
                WINNER
            </div>
            <div class="card-body">
                <h5 class="card-title">${winner.nick}</h5>
                <p class="card-text">Won with a score of ${winner.totale}</p>
            </div>
            <div class="card-footer">
                RANKING<br><br>${classifica.innerHTML}
            </div>
            </div>
        `;        
        winnerWrapper.appendChild(div);
    },

    generateList: function(){
        this.players.sort((a,b)=>b.totale-a.totale);
        let div = document.createElement('div');
        this.players.forEach((elemento, i)=>{
            let p = document.createElement('p');
            p.innerHTML = (i+1) + `. ${elemento.nick}`;
            div.appendChild(p);
        });
        return div;
    }
}

Bowling.showPlayers();

generateScores.addEventListener('click',()=>{
    Bowling.generateScores();
    Bowling.showPlayers();
})

addPlayer.addEventListener('click',()=>{
    let nick = prompt('Inserisci il Nickname del Giocatore');
    let nome = prompt('Inserisci il nome del Giocatore');
    Bowling.addPlayer(nick, nome);
    Bowling.showPlayers();

})

checkWinner.addEventListener('click',()=>{
    Bowling.checkWinner();
})

let generaPunteggi = function(){
    let punteggi = [];
    for (let i = 0; i < 10; i++) {
       punteggi.push(Math.floor((Math.random()*10)+1));    
    }
    return punteggi;
}
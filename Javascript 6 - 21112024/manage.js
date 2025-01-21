/* Esercizio 1: Gestione di una libreria
    Crea un oggetto chiamato libreria che rappresenti una piccola libreria. L'oggetto deve avere:

    Una proprietà libri (array) che inizialmente è vuota.
    Un metodo aggiungiLibro(titolo, autore) per aggiungere un libro all'array.
    Un metodo trovaLibro(titolo) che restituisce l'oggetto libro (con titolo e autore) se presente.
    Un metodo rimuoviLibro(titolo) che rimuove un libro dall'array in base al titolo.

 */
let libreria = {
  libri : [ ],

  aggiungiLibro : function(titolo, autore){
    this.libri.push({titolo : titolo, autore: autore});
  },

  trovaLibro : function(titolo){
    return this.libri.filter((el)=> el.titolo == titolo);
  },

  rimuoviLibro : function(titolo){
    return this.libri.filter((el)=> el.titolo != titolo);
  }

 }

 libreria.aggiungiLibro(`Il Signore degli Anelli`, `J.R.R. Tolkien`);
 libreria.aggiungiLibro(`Dune`, `Frank Herbert`);
 libreria.aggiungiLibro(`Minority Report`, `Philiph K. Dick`);
 libreria.aggiungiLibro(`Io, Robot`, `Isaac Aasimov`);

 console.log(libreria);
 
 console.log(libreria.trovaLibro(`Minority Report`));

 console.log(libreria.rimuoviLibro(`Io, Robot`));

/*  Esercizio 2: Gestione di una playlist musicale
Crea un oggetto chiamato playlist che rappresenti una lista di canzoni. L'oggetto deve avere:

Una proprietà canzoni (array) che contiene oggetti con titolo e artista.
Un metodo aggiungiCanzone(titolo, artista) che aggiunge una canzone alla playlist.
Un metodo filtraPerArtista(artista) che restituisce tutte le canzoni di un determinato artista.
Un metodo ordinaCanzoni() che ordina la playlist alfabeticamente in base al titolo delle canzoni.
 */

let playlist = {
  canzoni : [],

  aggiungiCanzone : function(titolo, artista){
    this.canzoni.push({titolo : titolo, artista: artista});
  },

  filtraPerArtista : function(artista){
    return this.canzoni.filter((el)=> el.artista == artista);
  },

  ordinaCanzoni : function(){
    this.canzoni.sort((a,b)=> a.titolo.localeCompare(b.titolo));
  }
}

playlist.aggiungiCanzone(`Basket Case`, `Green Day`);
playlist.aggiungiCanzone(`Self Esteem`, `The Offspring`);
playlist.aggiungiCanzone(`All the Small Things`, `Blink-182`);
playlist.aggiungiCanzone(`Blitzkrieg Bop`, `Ramones`);
playlist.aggiungiCanzone(`Anarchy in the U.K.`, `Sex Pistols`);
playlist.aggiungiCanzone(`American Jesus`, `Bad Religion`);
playlist.aggiungiCanzone(`Ruby Soho`, `Rancid`);
playlist.aggiungiCanzone(`Linoleum`, `NOFX`);
playlist.aggiungiCanzone(`Fat Lip`, `Sum 41`);
playlist.aggiungiCanzone(`I'm Not Okay (I Promise)`, `My Chemical Romance`);
playlist.aggiungiCanzone(`American Idiot`, `Green Day`);
playlist.aggiungiCanzone(`The Kids Aren't Alright`, `The Offspring`);
playlist.aggiungiCanzone(`What's My Age Again?`, `Blink-182`);
playlist.aggiungiCanzone(`I Wanna Be Sedated`, `Ramones`);
playlist.aggiungiCanzone(`God Save the Queen`, `Sex Pistols`);

console.log(playlist);
console.log(playlist.filtraPerArtista(`Sum 41`));
playlist.ordinaCanzoni();
console.log(playlist);

/* Esercizio 3: Gestione di una squadra di calcio
Crea un oggetto chiamato squadra che rappresenta una squadra di calcio. L'oggetto deve avere:

Una proprietà giocatori (array) che inizialmente è vuota.
Un metodo aggiungiGiocatore(nome, ruolo) per aggiungere un giocatore alla squadra.
Un metodo ottieniGiocatoriPerRuolo(ruolo) che restituisce tutti i giocatori con un ruolo specifico.
Un metodo totaleGiocatori() che restituisce il numero totale di giocatori nella squadra.
 */

let squadra = {
  giocatori : [ ],
  
  aggiungiGiocatore : function(nome, ruolo){
    this.giocatori.push({nome : nome, ruolo: ruolo});
  },

  ottieniGiocatoriPerRuolo : function(ruolo){
    return this.giocatori.filter((el)=> el.ruolo == ruolo);
  },

  totaleGiocatori : function(){
    return this.giocatori.length;
  }
}

squadra.aggiungiGiocatore(`Marco Rossi`, `Portiere`);
squadra.aggiungiGiocatore(`Luca Bianchi`, `Difensore Centrale`);
squadra.aggiungiGiocatore(`Andrea Esposito`, `Terzino Sinistro`);
squadra.aggiungiGiocatore(`Simone Conti`, `Terzino Destro`);
squadra.aggiungiGiocatore(`Matteo Ferri`, `Mediano`);
squadra.aggiungiGiocatore(`Giulio Galli`, `Centrocampista Centrale`);
squadra.aggiungiGiocatore(`Davide Mancini`, `Centrocampista Offensivo`);
squadra.aggiungiGiocatore(`Francesco Romano`, `Ala Destra`);
squadra.aggiungiGiocatore(`Alessandro Moretti`, `Ala Sinistra`);
squadra.aggiungiGiocatore(`Gabriele Greco`, `Attaccante Centrale`);
squadra.aggiungiGiocatore(`Emanuele Vitale`, `Portiere`);
squadra.aggiungiGiocatore(`Stefano Parisi`, `Difensore Centrale`);
squadra.aggiungiGiocatore(`Riccardo De Luca`, `Terzino Sinistro`);
squadra.aggiungiGiocatore(`Federico Fontana`, `Terzino Destro`);
squadra.aggiungiGiocatore(`Nicola Barbieri`, `Mediano`);
squadra.aggiungiGiocatore(`Antonio Serra`, `Centrocampista Centrale`);
squadra.aggiungiGiocatore(`Pietro Longhi`, `Centrocampista Offensivo`);
squadra.aggiungiGiocatore(`Daniele Rizzo`, `Ala Destra`);
squadra.aggiungiGiocatore(`Leonardo Ricci`, `Ala Sinistra`);
squadra.aggiungiGiocatore(`Michele Grassi`, `Attaccante Centrale`);

console.log(squadra);

console.log(`Il numero totale di giocatori nella squadra è ${squadra.totaleGiocatori()}`);

/* Esercizio 4: Gestione di un carrello della spesa
Crea un oggetto chiamato carrello che rappresenta un carrello della spesa. L'oggetto deve avere:

Una proprietà prodotti (array) che contiene oggetti con nome, prezzo, e quantità.
Un metodo aggiungiProdotto(nome, prezzo, quantità) che aggiunge un prodotto al carrello (se il prodotto esiste già, aggiorna la quantità).
Un metodo calcolaTotale() che restituisce il totale del prezzo di tutti i prodotti nel carrello.
Un metodo rimuoviProdotto(nome) che rimuove un prodotto dal carrello in base al nome.
 */

let carrello = {
  prodotti : [ ],
  
  aggiungiProdotto : function(nome,prezzo,quantita){
    let indice = this.prodotti.findIndex((el)=> el.nome == nome);
    if(indice == -1)
        this.prodotti.push({nome : nome, prezzo : prezzo, quantita : quantita});
    else{
        this.prodotti[indice].quantita+=quantita;
    }
  },

  calcolaTotale : function(){
    return this.prodotti.reduce((somma, prodotto) => {
        return somma + (prodotto.prezzo * prodotto.quantita);
      }, 0);
  },

  rimuoviProdotto : function(nome){
    this.prodotti = this.prodotti.filter((el)=> el.nome != nome);
  }
}

carrello.aggiungiProdotto(`T-shirt`, 12.99, 5);
carrello.aggiungiProdotto(`Jeans`, 39.99, 3);
carrello.aggiungiProdotto(`Giacca in pelle`, 99.99, 2);
carrello.aggiungiProdotto(`Felpa con cappuccio`, 29.99, 7);
carrello.aggiungiProdotto(`Camicia a quadri`, 22.99, 6);
console.log(carrello.calcolaTotale());
carrello.rimuoviProdotto(`Felpa con cappuccio`);
console.log(carrello.prodotti);
console.log(carrello.calcolaTotale());
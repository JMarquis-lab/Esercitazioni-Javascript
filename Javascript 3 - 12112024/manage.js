let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
   ];

let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
   ];

/**
 * ESERCIZIO 1
 * 
 * Stampa a schermo la frase: "Un Anello per domarli, un Anello per trovarli, un Anello per ghermirli e nel buio incatenarli.“ */

console.log(array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_2[4][0][0] + " " +array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_2[0][0][0] + " " +array_1[0][0] + " " + array_1[1][0] + " " + array_1[0][1] + " " + array_1[2][0] + " " + array_1[2][1] + " " + array_2[3][0] + " " + array_2[4][1] + " " + array_1[0][2]);
   

/**
 * ESERCIZIO 2
 * 
    * Scrivi una funzione che simuli un gioco di dadi tra due utenti, partendo da un prompt che richieda quanti tiri sono da effettuarsi.

    Stampare il giocatore che ha totalizzato più punti, tenendo conto che:
    ogni dado ha 6 facce
    ogni giocatore tirerà il dado n volte

    Per ogni giocatore:
    generare un numero casuale per ogni tiro che effettuerà,
    ed ogni tiro sarà sommato ai precedenti per calcolare il punteggio finale del giocatore rispettivo.

    TIPS:

    Usiamo la formula per generare un numero random tra 1 e 6, già vista a lezione 
 */
   let n = Number(prompt("Quanti dadi devono tirare i due giocatori?"));

   let lanciaDado = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

   let eseguiGioco = (n) => {
      let g1 = 0;
      let g2 = 0;
      for(let i = 0; i < n; i++){
         g1 += lanciaDado(1,6);
         //console.log(`il valore di g1 e': ${g1}`);
         g2 += lanciaDado(1,6);
         //console.log(`il valore di g2 e': ${g2}`);
      }

      if(g1 > g2)
         return `Il giocatore g1 ha vinto il gioco con un punteggio di ${g1}`;
      else if(g2 > g1)
         return `Il giocatore g2 ha vinto il gioco con un punteggio di ${g2}`;
      else
         return `E' stato un pareggio con un punteggio di ${g1}`
   }

   console.log(eseguiGioco(n));



/**
 * ESERCIZIO 3
 * Scrivi una funzione che permetta di stampare in console tutti i numeri da 1 a N:
    N dovra’ rappresentare il parametro formale della funzione
    tutti i numeri multipli di 3 siano sostituiti dalla stringa 'Fizz',
    tutti i numeri multipli di 5 siano sostituiti dalla stringa 'Buzz'
    e tutti i numeri multipli di 15 siano sostituiti dalla stringa 'fizzBuzz'
 */

   let esercizioTre = (n) => {
      for(let i = 1; i <= n; i++){
         if(i % 3 == 0 && i % 5 == 0)
            console.log(`FizzBuzz`);
         else if(i % 3 == 0)
            console.log(`Fizz`);
         else if(i % 5 == 0){
            console.log(`Buzz`);
         }
         else
         console.log(i);
      }
   }
   esercizioTre(30);



/**
 * ESERCIZIO 4
 * Scrivi una funzione che dato un numero intero (massimo 9999) conti da quante cifre è formato.
    Esempio:
    Input : 9 → output: 1 cifra
    Input : 99 → output: 2 cifre
    Input: 12000 → output: Numero troppo grande
*/

let esercizioQuattro = (n) => {
   if(n > 9999)
      return `Il numero è troppo grande. Numero massimo consentito 9999`;
   
   return `Il numero ${n} ha un numero di cifre pari a: ${n.toString().length}`; 
}

console.log(esercizioQuattro(754));

/**
    * Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.
   Esempio:
   Input: array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4]
   Output: [8, 7, 6, 5, 3, 2, 1, -2, -4]

   Variante:
   Prova ad ordinali in modo crescente.
 */

   let ordinaArray = (a,modo) => {
      if(modo == 'd')
         // Utilizziamo una funzione anonima per definire l'ordinamento decrescente degli elementi
         a.sort((a, b) => b - a);
      if(modo == 'c')
         // Utilizziamo una funzione anonima per definire l'ordinamento crescente degli elementi
         a.sort((a, b) => a - b);
      return a;
   }

   array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];
   console.log(array);
 
   arrayOrdinatoDecrescente = ordinaArray(array,'d');
   console.log(arrayOrdinatoDecrescente);
   
   arrayOrdinatoCrescente = ordinaArray(array,'c');
   console.log(arrayOrdinatoCrescente);
/**
 * ESERCIZIO 1
 * Calcolare l'area di un Cerchio di raggio R = 10
 */

let areaCerchio = (r) => r*r*Math.PI;

let r = 10;
console.log(`Esercizio 1: L'area del cerchio di raggio ${r} e': ` + areaCerchio(r));

/**
 * ESERCIZIO 2
 * Calcolare l'ipotenusa di un triangolo rettangolo di cateti 3 e 4.
 */

let calcolaIpotenusa = (c1, c2) => Math.sqrt((c1*c1)+(c2*c2));

console.log(`Esercizio 2: L'ipotenusa di un triangolo rettangolo di cateti 3 e 4 e': ` + calcolaIpotenusa(3,4)); 

/**
 * ESERCIZIO 3
 * Scrivere una funzione che, assegnati due numeri, generi un numero random intero fra i due assegnati (compresi)
 */

let generaRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(`Esercizio 3: Numero intero casuale generato tra 1 e 20: ` + generaRandom(1,20));

/**
 * ESERCIZIO 4
 * Scrivere una funzione che trasformi un nome nelle sue iniziali. Ad esempio: Tizio Caio => T.C.
 */

let nome = 'Santo Giuseppe Marchese';

let generaIniziali = (nome) => {    
    let pezzi = nome.split(' ');
    let iniziali = '';
    pezzi.forEach(element => {
        iniziali += element.charAt(0) + `.`;        
    });
    return iniziali;
}

console.log(`Esercizio 4: Iniziali del nome ${nome}: ` + generaIniziali(nome));

/**
 * ESERCIZIO 5
 * Scrivere una funzione che, assegnati tre numeri, ritorni true, se i tre numeri possono essere i lati di un triangolo, false altrimenti
 */

let lati = [ 18, 14, 25 ];

let isTriangolo = (lati)=> {
    let latoGrande = Math.max(...lati);
    let indice = lati.indexOf(latoGrande);
    let somma = 0;
    for (let index = 0; index < lati.length; index++) {
        if(index != indice)
            somma += lati[index];
    }
    return (latoGrande<somma) ? true : false; 
}

console.log(`ESERCIZIO 5: con i lati ${lati} possiamo costruire un triangolo? ` + isTriangolo(lati));

/**
 * ESERCIZIO 6
 * Congettura di Collatz: preso un numero naturale maggiore di 1, se questo è pari dividerlo per due, se dispari, moltiplicario per 3 e aggiungere 1. Ripetere. Qualunque sia il numero di partenza, l'algoritmo termina sempre ad 1. Scrivere una funzione che implementi l'algoritmo e ritorni un array con il valore calcolato ad ogni interazione. Ad esempio, 10 [10, 5, 16, 8, 4, 2, 1]
 */

let numero = 51;

let congetturaCollatz = (numero)=> {
    let ritorno = [];
    ritorno.push(numero);
    while (numero > 1) {
        if(numero %2 == 0)
            numero /= 2;
        else
            numero = (numero*3)+1;
    ritorno.push(numero);
    }
    return ritorno;
}

console.log(`ESERCIZIO 6: Esecuzione della Congettura di Collatz per il numero ${numero}: ` + congetturaCollatz(numero));

/**
 * ESERCIZIO 7
 * Scrivere un programma che stampi tutti i numeri da 1 a 180: per i multipli di 3 stampare "JAVA" (al posto del numero), per i multipli di 5 stampare "SCRIPT". Infine per i numeri multipli di 3 e 5 stampare invece "JAVASCRIPT"
 */

let esercizioSette = (n) => {
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0)
            console.log(`JAVASCRIPT`);
        else if(i % 3 == 0)
            console.log(`JAVA`);
        else if(i % 5 == 0){
            console.log(`SCRIPT`);
        }
        else
        console.log(i);
    }
}
console.log(`ESERCIZIO 7: Per vedere il risultato dell'esercizio sette, togliere il commento alla riga 108`);
 //esercizioSette(180);

 /**
  * ESERCIZIO 8.
  * Scrivere una funzione che, assegnato un numero, ritorni la successione di Fibonacci fino all'n-simo numero sotto forma di array. Ad esempio: 3 (1,1,2), 0 ancora 9 => [1,1,2,3,5,8,13,21,34]
  */

 let n = 13;
 let fibonacci = (n) => {
    let successione = [1];
    for (let index = 1; index < n; index++) {
        if(index == 1){
            successione.push(1);
        }
        else{
            successione.push( successione[index-2] + successione[index-1] );
        }
    }
    return successione;
 }

 console.log(`ESERCIZIO 8: Successione di Fibonacci per il numero ${n}: ` + fibonacci(n));

 /**
  * Esercizio 9
  * Scrivere una funzione che, assegnato un numero n, ritorni se n è primo.
  */

 let isPrime = (n)=> {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; 
        }
    }
    return n;
}

console.log(`ESERCIZIO 9: Controllo di Primalità del numero ${n}: ` + isPrime(n));

/**
 * ESERCIZIO 10
 * Scrivere una funzione che, assegnata una stringa, ritorni la somma delle cifre in essa presenti. Ad esempio, "Sono 1 stringa di 6 parole" => 7
 */

let stringa = `Sono 1 stringa di 6 parole`; 
let sommaCifre = (stringa)=> {
    let somma = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa.charAt(i) >= '0' && stringa.charAt(i)<='9')
            somma += Number(stringa.charAt(i));
    }
    return somma;
}

console.log(`ESERCIZIO 10: Sommatoria delle cifre nella stringa: "${stringa}": ` + sommaCifre(stringa));

/**
 * ESERCIZIO 11
 * Scrivere una funzione che accetta come parametri un array di numeri ed un numero di soglia, e restituisca un array formato dai numeri maggiori della soglia fornita. Ad esempio: (\{1, 2, 3, 4\}, 3) -> 4\
 */ 

let arrayNumeri = [ 4, 7, 6, 2, 4, 9, 8, 10, -3, -5, -7, -8, -9 ];
let soglia = 0;

let filtraSoglia = (v, soglia) => {
    return v.sort((a,b)=> a-b).filter( (elemento)=> Number(elemento) > soglia );
}

console.log(`ESERCIZIO 11: Array filtrato in base alla soglia con valore "${soglia}": ` + filtraSoglia(arrayNumeri,soglia));

/**
 * ESECIZIO 12
 * Scrivere una funziona che trasformi un numero in ore e minuti: ad esempio 3014 50:14; devono essere sempre presenti due cifre, sia per te ore che per i minuti (non devo leggere, ad esempio 1:9 ma 01:09)
 */

let cifra = 3014;
let convertiOre = (numero) => {

    let ore = Math.floor(numero/60);
    (ore<10) ? "0"+ore : ore;

    let minuti = numero % 60;
    (minuti<10) ? "0"+minuti : minuti;

    return `${ore}:${minuti}`;
}

console.log(`ESERCIZIO 12: Valore del numero "${cifra}" convertito in ore e minuti: ` + convertiOre(cifra));

/**
 * ESERCIZIO 13
 * Scrivere una funzione che generi un array formato da N numeri interi random, fra un minimo ed un massimo assegnati.
 */

let N = 20;
let min = 1;
let max = 20;
let riempiArray = (N, min, max) => {
    let container =[];
    for (let i = 0; i < N; i++) {
        container[i]=Math.floor(Math.random()*(max-min+1)-min);
    }
    return container;
}

console.log(`ESERCIZIO 13: array di ${N} elementi generato con numeri random tra ${min} e ${max}: ` + riempiArray(N, min, max));

/**
 * ESERCIZIO 14
 * Scrivere una funzione che trasforma un array di array (ogni elemento è una coppia [primo, secondo]) in un oggetto ((primo: secondo)). Ad esempio: [["nome", "mario"], ["cognome", "rossi"], ["anni", 32]] => {nome: "mario", cognome: "rossi", anni: 32}
 */


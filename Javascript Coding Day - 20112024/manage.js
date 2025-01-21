/* CODING DAY
ES 1 - Dato un array di oggetti rappresentanti degli sviluppatori crea una funzione che calcoli e restituisca il numero di sviluppatori di Javascript provenienti dall’europa */

let list1 = [
      { firstName: 'Marco', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
      { firstName: 'Simone', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
      { firstName: 'Matteo', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
      { firstName: 'Ettore', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
    ];

let countJavaEurope = (list) => {
    return list.filter((el)=> el.continent == `Europe` && el.language == `JavaScript`).length;
}

console.log(countJavaEurope(list1));

/* ES 2 - Dato un array di oggetti crea una funzione che ritorni un array e aggiunga a ogni oggetto la proprietà ‘greeting’ con il seguente valore:
Ciao, mi chiamo < firstName > e lavoro con < language here >, ma effettivamente è meglio javascript */

let list2 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];

let addGreeting = (list)=>{
    list.forEach(element => {
        element.greeting = `Ciao, mi chiamo ${element.firstName} e lavoro con ${element.language}, ma effettivamente è meglio javascript`;
    });
    return list;
}

console.log(addGreeting(list2));

/* ES 3 -  Dato un array di oggetti, crea una funzione che ritorni

true se c’è almeno una persona che ha gli occhi verdi;
false se nessuno ha gli occhi verdi

consiglio con indovinello: 
anche la ricerca è importante per un web developer!
Avete diverse strade da poter prendere, scegliete quella più consona. 
Dovete cercare sulla documentazione dei metodi che non abbiamo visto a lezione.
parole chiave per capire i/il metodi/o: 

    “se è incluso” / “se ci sono tutti” / “se ci sono alcuni”

una delle parole chiave è errata. 
La traduzione in inglese vi farà capire le/la vostre/a vere/a chiavi/e
 */

let list3 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, eyes: 'Brown' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, eyes: 'Black' },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, eyes: 'Green' }
];

let searchGreenEye = (list)=> {
    return list.some((el)=> el.eyes == `Green`);
}

console.log(searchGreenEye(list3));

/* ES 4 - Dato un Array di oggetti
Crea una funzione che ritorni la seguente stringa:

< firstName >, < country > del primo sviluppatore Python che trova
Non ci sono sviluppatori Python nel caso in cui non ci siano.
*/

let list4 = [
    { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
    { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
  ];

let firstPython = (list)=> {
    let indice = list.findIndex((el)=> el.language == `Python`);

    if(indice != -1)
        return `${list[indice].firstName}, ${list[indice].country}`;
    else
        return `Non ci sono Sviluppatori Python`;
}

console.log(firstPython(list4));

/* ES 5 - Dato un array di oggetti, creare una funzione che permetta di mostrare un messaggio di alert:

se logged=true: mostrare il messaggio “L’utente è stato registrato.”
se logged=false: mostrare il messaggio “L’utente non è registrato.”

Utilizzare alert() → metodo che fa visualizzare una finestra di pop-up per mostrare un messaggio di avviso all’utente
  alert('Messaggio di avviso per l'utente'); */

let list5 = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, logged: true },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, logged: false },
    { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, logged: true }
];

let checkLogin = (user, list)=>{
    let indice = list.findIndex((el)=> el.firstName == user);
        
    if(list[indice].logged == true)
        return `L'utente è stato registrato`;
    else
        return `L'utente non è registrato`;
}

console.log(checkLogin(`Emma`,list5));

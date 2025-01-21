/** ESERCIZIO 1
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


    /** ESERCIZIO 2
     * Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media:  

    Esempio:

        Input: a = [3, 5, 10, 2, 8]
        Output: media = 5.6, valori minori = [3, 5, 2]
    Variante:

    Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. 
    */

    array = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];

    let somma = array.reduce( (accumulatore, valore) => accumulatore+valore );
    //console.log(somma);
    
    let media = parseFloat( somma/array.length );
    console.log(`La media e': ${media}`);

    let minoriMedia = array.filter( (valore) => valore < media );
    console.log(ordinaArray(minoriMedia,'c'));

    let maggioriMedia = array.filter( (valore) => valore > media );
    console.log(ordinaArray(maggioriMedia,'c'));


    /**
     * Crea un oggetto persona con le seguenti caratteristiche:
        nome
        cognome
        eta'
        un metodo che permetta di salutare
     */

    let Persona = {
        'nome' : `Giuseppe`,
        'cognome' : `Verdi`,
        'eta' : `25`,

        'saluta' : function(){ 
            console.log(`Ciao a tutti da ${this.nome} ${this.cognome}`); 
        }
    }
    
    Persona.saluta();

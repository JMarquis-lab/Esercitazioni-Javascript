/**
 * ESERCIZIO EXTRA
 * 
 * Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

    Primo step: eliminare gli spazi e i segni di punteggiatura:

    HINT 
    Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")

    Esempio:
    Input: “i topi non avevano nipoti”
    Output: true
 */

    let checkPalindroma = (stringa) => {

      //Eliminiamo gli spazi e i segni di punteggiatura
      stringa = stringa.replace(/\W/g, "").toUpperCase();

      let check = true;
      for(let i = 0; i < stringa.length && check; i++){

         // controlliamo se la i-esima posizione è diversa dalla sua corrispettiva posizione alla fine della stringa
         if(stringa.charAt(i) != stringa.charAt(stringa.length - i - 1))

            // Impostiamo il check a false. Questo booleano va anche ad interrompere il for per una maggiore
            // efficienza dell'algoritmo.
            check = false;
      }

      return check;

    }

    console.log(checkPalindroma('I topi non avevano nipoti'));

    console.log(checkPalindroma('Hello, World!'));
    
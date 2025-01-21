/* Crea una pagina con due campi di input numerici, un pulsante "Calcola Somma" e un paragrafo per visualizzare il risultato. Scrivi un JavaScript che, al clic del pulsante, legge i valori dei due input, calcola la loro somma e visualizza il risultato nel paragrafo. */

let addendi = document.querySelectorAll('.form-control');



let pulsante = document.querySelector('.btn');

let paragrafo = document.querySelector('p');

pulsante.addEventListener('click', ()=>{
    let somma = 0;
    
    addendi.forEach((elemento)=>{
        if(Number(elemento.value))
            somma += Number(elemento.value);
        else
            alert(`Uno dei due numeri non e' un numero!!!`);
    });

    paragrafo.innerHTML = `La somma finale e': ${somma}`;
});
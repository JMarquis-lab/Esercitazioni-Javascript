/* Lavora con il DOM:

crea una pagina HTML con 3 paragrafi e 3 bottoni. 
Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale.
ogni paragrafo dovra' avere un colore diverso. 
il secondo dovra’ rendere il testo dei paragrafi in grassetto. 
il terzo dovra’ far scomparire e ricomparire i paragrafi.
TIPS:

ricordati della proprieta’ display: none in CSS!
i colori su CSS sono formati da R, G e B. Quindi puoi settare un colore random semplicemente randomizzando questi tre valori e mettendoli insieme. Scopri come. */

let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");

let paragrafi = document.querySelectorAll("p");

// Il pulsante 1 assegna un colore casuale al testo dei parafrafi
button1.addEventListener('click',()=>{
    paragrafi.forEach((paragrafo)=>{
        let r = generaColoreCasuale();
        let g = generaColoreCasuale();
        let b = generaColoreCasuale();
        paragrafo.style.color = `rgb(${r},${g},${b})`;
    });
});


// Il pulsante 2 attiva e disattiva il grassetto
button2.addEventListener('click',()=>{
    paragrafi.forEach((paragrafo)=>{
        paragrafo.classList.toggle("fw-bold");
    });
});

// Il pulsante 3 attiva e disattiva la visualizzazione dei Paragrafi
button3.addEventListener('click',()=>{
    paragrafi.forEach((paragrafo)=>{
        paragrafo.classList.toggle("invisible");
    });
});

let generaColoreCasuale = ()=>{
    return Math.floor(Math.random()*256);
}
/* Crea una pagina con un campo di input per inserire l'età e un pulsante "Controlla". Quando premi il pulsante:

Se l'età è maggiore o uguale a 18, mostra un messaggio "Sei maggiorenne" in un paragrafo.
Altrimenti, mostra "Sei minorenne". */

let eta = document.querySelector('.form-control');
let pulsante = document.querySelector('.btn');

let paragrafo = document.querySelector('p');

pulsante.addEventListener('click',()=>{
    if(!Number(eta.value))
        alert(`Il valore inserito non è un'età valida`);
    else{
        if(Number(eta.value) >= 18)
            paragrafo.innerHTML = `Sei Maggiorenne`;
        else
            paragrafo.innerHTML = `Sei Minorenne`;
    }
});
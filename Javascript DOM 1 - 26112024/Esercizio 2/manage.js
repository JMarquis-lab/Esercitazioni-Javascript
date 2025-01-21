/* Crea un file html con le seguenti caratteristiche:

un input per il titolo
una textarea per inserire un paragrafo
un bottone per creare l’articolo
Al click sul bottone, crea un articolo popolato dai valori prelevati dai due input

inserire nell’articolo anche la data di pubblicazione tramite questa istruzione → Date - JavaScript | MDN

let date = new Date();
let formatDate = date.toLocaleDateString()

EXTRA:
fai in modo che, cliccando sul bottone crea articolo, se titolo o paragrafo sono vuoti, esca un alert che informi l’utente del problema
fai in modo che, una volta creato l’articolo, gli input vengano puliti
Prendete questa immagine sottostante come esempio */

let titolo = document.querySelector('#titolo');
let articolo = document.querySelector('#articolo');
let inserisci = document.querySelector('#inserisci');

let wrapper = document.querySelector('#wrapper');

let picsum = 300;

inserisci.addEventListener('click',()=>{
    if(titolo.value == '' || articolo.value == ''){
        alert(`Ci sono alcuni campi vuoti. Ricontrolla.`);
    }
    else{
        let date = new Date();
        let formatDate = date.toLocaleDateString();

        let div = document.createElement('div');
        div.classList.add('card');
        div.style.width = '18rem';
        div.innerHTML = `
                <img src="http://picsum.photos/${picsum}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${titolo.value}</h5>
                    <p class="card-text">${articolo.value} <br> ${formatDate}</p>
                    <a href="#" class="btn btn-primary">Leggi l'articolo</a>
                </div> 
        `;    
        wrapper.appendChild(div);
        picsum++;
        titolo.value = '';
        articolo.value = '';
    }
});


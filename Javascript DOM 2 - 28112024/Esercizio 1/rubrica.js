/* Crea una rubrica contenente una lista di contatti e con le seguenti funzionalita':

Mostrare o nascondere la lista dei contatti
Popolare la tabella con i contatti presenti nell’array di partenza
Aggiungere un nuovo contatto
Eliminare un contatto in rubrica
ESEMPIO: Esercizio fatto durante la lezione scorsa. */

let toggleContacts = document.querySelector('#toggleContacts');
let addContact = document. querySelector('#addContact');

let nomeR = document.querySelector('#nome');
let tagR = document.querySelector('#tag');
let numeroR = document.querySelector('#numero');

let wrapper = document.querySelector('.wrapper');


let rubrica = {

    contacts: [

    {name : 'Giuseppe', tag: 'Owner', number: '1234567891'},
    {name : 'Maria', tag: 'Sister', number: '3216547852'},
    {name : 'Pierluigi', tag: 'Father', number: '2563214875'},
    {name : 'Anna', tag: 'Mother', number: '2350150250'},

    ],

    showContacts: function(){

        this.contacts.sort((a,b)=>a.name.localeCompare(b.name));

        wrapper.innerHTML = '';

        this.contacts.forEach((elemento)=>{
            let div = document.createElement('div');
            div.classList.add('col-12','col-md-3','px-2','my-2');

            div.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body cardCustom">
                      <h5 class="card-title">${elemento.name}</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">${elemento.tag}</h6>
                      <p class="card-text">${elemento.number}</p>
                      <a href="#" id="${elemento.name}" class="btn btnCustom removeContact">Rimuovi Contatto</a>
                    </div>
                </div>
            </div>
            `;
            wrapper.appendChild(div);
        });


        let removeContact = document.querySelectorAll('.removeContact');
        removeContact.forEach((elemento)=>{
            elemento.addEventListener('click',(event)=>{
                rubrica.removeContact(event.target.id);
            })
        })

    },

    addContact: function(nome, tag, numero){
        this.contacts.push({name: nome, tag : tag, number: numero});
        this.showContacts();
    },

    removeContact: function(nome){
        this.contacts = this.contacts.filter((elemento)=> elemento.name != nome);
        this.showContacts();
    }
}

rubrica.showContacts();

toggleContacts.addEventListener('click',()=>{
    let flag = wrapper.classList.toggle('invisible');
    if(!flag)
        toggleContacts.textContent = `Nascondi Rubrica`;
    else
        toggleContacts.textContent = `Mostra Rubrica`;
        
})

addContact.addEventListener('click',()=>{
    rubrica.addContact(nomeR.value,tagR.value,numeroR.value);
    rubrica.showContacts();

})
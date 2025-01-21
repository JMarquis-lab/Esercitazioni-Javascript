/*
Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:

mostrare tutti i contatti dell’agenda
mostrare un singolo contatto
eliminare un contatto dall’agenda
aggiungere un nuovo contatto
modificare un contatto esistente  
 */
let rubrica = {
  'contacts': [
      {'nome': 'Angela', 'telefono': '3331111111'},
      {'nome': 'Annalisa', 'telefono': '3332222222'},
      {'nome': 'Paola', 'telefono': '3333333333'},
      {'nome': 'Emilia', 'telefono': '3334444444'}
  ],
  
  //Mostrare tutti i contatti dell'agenda
  'showContacts' : function() {
    this.contacts.forEach((element)=> console.log(`${element.nome} - Tel: ${element.telefono}`));
  },

  //Mostrare un singolo contatto

  'showContact' : function(nome){
    console.log(this.contacts.find((element)=> element.nome = nome));
  },

  //Eliminare un contatto dall'agenda
  'removeContact' : function(nome){
    let indice = rubrica.contacts.findIndex(contatto => contatto.nome === nome);
    if(indice>=0)
        this.contacts.splice(indice, 1);
  },

  //Aggiungere un nuovo contatto
  'insertContact' : function(nome, telefono){
    let contatto = { 
        'nome' : nome,
        'telefono' : telefono
    };
    this.contacts.push(contatto);
  },

  //Modificare un contatto esistente
  'editContact' : function (oldName, newNome, telefono){
    let indice = rubrica.contacts.findIndex(contatto => contatto.nome == oldName);
    if(indice>=0){
        this.contacts[indice].nome = newNome;
        this.contacts[indice].telefono = telefono;
    }
  }
}

console.log(`---- tutti i contatti ----`);
rubrica.showContacts();

rubrica.removeContact('Annalisa');
console.log(`---- rimossa Annalisa----`);
rubrica.showContacts();

rubrica.insertContact(`Maria`,`3335544123`);
console.log(`---- inserita Maria ----`);
rubrica.showContacts();

rubrica.editContact(`Maria`,`Stella`,`123456789`);
console.log(`---- modificata Maria ----`);
rubrica.showContacts();
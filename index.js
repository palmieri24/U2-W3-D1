//ESERCIZIO N°1
//1)crea classe User per creazione oggetti di tipo "utente".
//il suo costruttore dovrà inizializzare ogni oggetto utente con i seguenti attributi:
//-firstName -lastName -age -location

//2)aggiungi alla classe User anche un metodo che restituisca il confronto con l'età di un'altra persona. Es: date due istanze della classe utente x e y inizializzate con le proprietà sopra descritte, il metodo dovrà restituire una frase simile a "x è pi vecchio di y" a seconda del risultato del confronto.

//3)crea degli oggetti a partire dalla classe User e verifica che la comparazione tra le età funzioni correttamente.

class User {
  constructor(name, surname, age, location) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.location = location;
  }
}

function ComparingAges() {
  const user1 = new User("Pinko", "Pallino", 30, "Firenze");
  console.log(user1);

  const user2 = new User("Gianni", "Morandi", 70, "Milano");
  console.log(user2);

  if (user1.age < user2.age) {
    return console.log(
      user1.firstName + " è più giovane di " + user2.firstName
    );
  } else {
    return console.log(
      user1.firstName + " è più vecchio di " + user2.firstName
    );
  }
}

ComparingAges();

//ESERCIZIO N°2
//1)crea un form per la creazione di oggetti "Pet" (animali domestici).
//dovrà contenere le seguenti proprietà: petName, ownerName, species(cane,gatto,coniglio,ecc), breed(labrador, soriano, nano,ecc)

//2)nella classe che utilizzerai per creare questi oggetti aggiungi anche un metodo che restituisca true se 2 animali condividono lo stesso padrone.

//3)crea, raccogliendo i dati dal form, diverse istanze della classe Pet e mostrane i dati in una lista sottostante.

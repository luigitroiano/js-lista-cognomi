//Chiedere all'utente il cognome
var cognomeUtente = prompt("Type your last name");
// Inserirlo in un array con altri cognomi: ‘Bianchi', ‘Rossi', ‘Duzioni', ‘Balsano', ‘Verdi'
var cognomi = ["Troiano", "Oliaro", "Guala", "Volpato", "Tedoldi"];
cognomi.push(cognomeUtente);
console.log(cognomeUtente, cognomi);
//Stampa la lista ordinata alfabeticamente
cognomi.sort();
console.log(cognomi);

//Scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova
var posizioneCognomeUtente = cognomi.indexOf(cognomeUtente) + 1;
console.log("Posizione umana " posizioneCognomeUtente);

// Chiedo all'utente il numero di chilometri percorsi

let kmPercorsi = parseFloat(prompt("Inserisci quanti chilometri devi percorrere:"));
console.log(kmPercorsi);

// Chiedo all'utente la sua età

let eta = parseInt(prompt("Inserisci la tua età:"));
console.log(eta);

// Creo una variabile per calcolare il prezzo non scontato

let prezzoNonScontato = parseFloat(kmPercorsi * 0.21).toFixed(2);
console.log(prezzoNonScontato);

// Creo una condizione secondo la quale chi ha meno di 18 anni ha uno sconto del 20%, chi ha più di 65 anni ottiene uno sconto del 40% altrimenti paga il biglietto non scontato.

if(eta < 18){
    let prezzoScontatoMinorenni = "Il costo del biglietto è: "+(prezzoNonScontato * 0.8).toFixed(2)+"€";
    console.log(prezzoScontatoMinorenni);

}else if(eta > 65){
    let prezzoScontatoSenior = "Il costo del biglietto  è: "+(prezzoNonScontato * 0.6).toFixed(2)+"€";
    console.log(prezzoScontatoSenior);

}else{
    let prezzoFinale = "Il costo del biglietto è: "+prezzoNonScontato+"€";
    console.log(prezzoFinale);
};
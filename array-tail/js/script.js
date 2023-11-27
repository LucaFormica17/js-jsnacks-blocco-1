//1 - dichiarare array vuoto
const empty = [];

//chiedere all'utente quanti elementi dovranno comporre l'array tramite prompt
let length = parseInt(prompt('da quanti elementi deve comporsi il contenitore?'));

//dare dimensione all'array con il valore dato dall'utente
let num;

//generare tanti numeri casuali quanti gli elementi dell'array
//dichiarare ciclo for che si ripeta per la lunghezza che dovrà avere l'array
for(let i=0; i<length; i++){
    //per ogni ciclo verrà generato un numero intero compreso tra 1 e 100 tramite funzioni di math random e arrotondato a intero tramite funzione math floor
    num = Math.floor((Math.random() * 100) + 1);
    empty.push(num);
}



//stampiamo ultimi 5 elementi dell'array
let print = [];
for(let i=length - 1; i>(length - 6); i--){
    //stampare in console il risultato
    print.push(empty[i]);
}
console.log(print);


//metodo alternativo con slice
empty.reverse();
let new_empty = empty.slice(0,5);
console.log(new_empty);

//2 metodo alternativo
empty.reverse();
let new_empty_bis = empty.slice(-5);
console.log(new_empty_bis);
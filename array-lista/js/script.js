//1 - dichiarare creare array contenente elementi indicati
const fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

//2 - aggiungere ad array un ulteriore elemento
fridge.push('pesca');

//3 - verificare se un dato 'elemento' è presente in array
let flag = false;
for(let i=0; i<fridge.length; i++){
    if(fridge[i] === 'cocomero'){
        flag = true;
    }
}

if(flag){
    console.log("Trovato! Devo solo preparare il cocktail.");
}
else{
    console.log("Oh no, devo uscire a comprare il cocomero!");
}
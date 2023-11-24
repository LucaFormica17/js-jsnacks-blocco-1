//1 - dichiarare array di lunghezza x
const first = [2,5,65,45,78,98,32,12,54,32,65,9,12];


//2 - dichiarare array di lunghezza y
const second = [43,54,87,21,45,65,8];


//3 - se lunghezza di x > y allora generare un elemento casuale da aggiungere ad array y
for(let i=second.length; i<first.length; i++){

    if(first.length > second.length){
        {let element = Math.floor((Math.random() * 10) + 1);
            
            second.push(element);
        }
    }
}
console.log(first.length, first);
console.log(second.length, second);
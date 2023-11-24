1. TuttiFrutti
Cartella array-lista
Descrizione:
Abbiamo un frigorifero pieno di frutta:
'banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'  
C'è anche una pesca sul tavolo, la mettiamo nel frigo.
Stasera dobbiamo fare un cocktail a base di cocomero: ce l'abbiamo o no in frigo?
Fasi
1. creare l'array con la frutta del frigorifero
2. aggiungere la pesca all'array della frutta
3. verificare se nell'array di frutta c'è il cocomero:
   - se c'è stampiamo: "Trovato! Devo solo preparare il cocktail."
   - se non lo trovo: "Oh no, devo uscire a comprare il cocomero!"
Suggerimenti/Indicazioni:
Sì, lo sappiamo che esiste la funzione includes() ma noi non la vogliamo utilizzare per cercare nel frigorifero.
2. La coda dell'Array
Cartella: array_tail
Creiamo un array chiedendo all'utente quanti elementi dovrà contenere e generando tanti numeri casuali (compresi nell'intervallo da 1 a 100) per quanti sono gli elementi da inserire.
Stampiamo poi gli ultimi 5 elementi dell'Array
Bonus:
Chiediamo all'utente quanti elementi dell'array dovremo stampare
Suggerimenti:
Probabilmente conviene controllare che il numero di elementi della coda non sia più grande del numero di elementi totali dell'array
3.  (Bonus)
Cartella: array_bonus
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente: (edited)


PROBLEMA 1
1 - dichiarare creare array contenente elementi indicati
2 - aggiungere ad array un ulteriore elemento
3 - verificare se un dato 'elemento' è presente in array
    3.1 - dichiarare ciclo for per array e verificare se 'elemento' è presente tra quelli già inseriti
        3.1.1 - se è presente stampare risultato positivo
        3.1.2 - altrimenti stampare risultato negativo


PROBLEMA 2
1 - dichiarare array vuoto
2 - chiedere all'utente quanti elementi dovranno comporre l'array tramite prompt
3 - generare tanti numeri casuali quanti gli elementi dell'array
    3.1 - dichiarare ciclo for che si ripeta per la lunghezza che dovrà avere l'array
    3.2 - per ogni ciclo verrà generato un numero intero compreso tra 1 e 100 tramite funzioni di math random e arrotondato a intero tramite funzione math floor
4 - stampiamo ultimi 5 elementi dell'array
    4.1 - dichiariamo ciclo for che parta dall'ultimo elemento di array per finire a lunghezza - 5 elementi
    4.2 - stampare in console il risultato


PROBLEMA 3
1 - dichiarare array di lunghezza x
2 - dichiarare array di lunghezza y
3 - se lunghezza di x > y allora generare un elemento casuale da aggiungere ad array y
4 - altrimenti stampa i due array in console
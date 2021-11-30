/* Visualizzare con degli alert 5 numeri casuali. 
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, 
tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, 
il software dice quanti e quali dei numeri da indovinare 
sono stati individuati. */

//quantità di numeri casuali da mostrare
let num = 5;

//array numeri casuali
let arrayRandom = [];

//Ciclo for per i numeri casuali
for( let i = 1; i <= num; i++ ){

    let n = randomNum();

    alert("Numero "+ i + ": " + n);
    
    arrayRandom.push(n);
}

//contatore dei secondi
let contatore = 5;

//numeri inseriti dall'utente
let numUtente;

//array numeri utente
let arrayUtente = [];

//contatore numeri esatti
let numCorretto = 0;

//funzione del conto alla rovescia
//che si ferma arrivato a 0
//e controlla con un ciclo for i numeri inseriti dall'utente
//con un filter confronta i due array(arrayRandom e arrayUtente)
//crea un nuovo array con i numeri giusti inseriti
//e in seguito viene mostrata la quantità di numeri giusti inseriti
//e i numeri stessi

const clock = setInterval(
    
function(){

    contatore--;
    console.log(contatore);

    if( contatore === 0 ){

        clearInterval(clock);
    
        for( let i = 1; i <= num; i++ ){

            numUtente = parseInt( prompt( "Inserire il numero " + i + ": " ) );
        
            arrayUtente.push(numUtente);

            console.log(arrayUtente);

        }

    //controllo dei due array 
    //per verificare i numeri inseriti dall'utente

    //array con i numeri uguali inseriti

    let arrayCorretto = arrayRandom.filter((element, index) => {

        for( let i = 0; i < arrayRandom.length ; i++ ){

            /* console.log("Numeri utente: " + arrayUtente[i]);

            console.log("Numeri casuali: " + element); */

            if( arrayUtente[i] === element ){
                numCorretto++;

                return element;
            }

        }

    });

    //Visualizzazione della quantità di numeri corretti inseriti
    alert("Hai inserito " + numCorretto + " numero/i corretti");
    
    //Visualizzazione dei numeri corretti inseriti
    alert("I numeri giusti inseriti sono: " + arrayCorretto);

}

}, 1000)


//Funzione per generare numeri casuali
function randomNum(){

    return Math.floor(Math.random() * 10) + 1;

}
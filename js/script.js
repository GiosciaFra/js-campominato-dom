// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità 

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

// Consigli del giorno:  
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.




const gridElement = document.querySelector('#grid');
const playButton = document.querySelector('#play'); 
const levelElement = document.querySelector('#level');


//  cambio livello

let changeLevel = levelElement.value;

console.log(changeLevel);

levelElement.addEventListener('change',
function() {

    changeLevel = levelElement.value;
    console.log('livello', changeLevel);
}
)

playButton.addEventListener('click', function() {


    // rimozione griglie (partite precedenti) con 'remove'

    gridElement.classList.remove('medium');

    gridElement.classList.remove('hard');


    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }


    // console.log("play");

    let gridLevel;

    if (changeLevel == "medium") {
        gridLevel = 81;
    } else if (changeLevel === "hard") {
        gridLevel = 49;
    } else  {
    gridLevel = 100;
    }

// creazione griglia
    for (let i = 0; i < gridLevel; i++) {

        if (changeLevel == "medium") {
            gridElement.classList.add("medium");
        }

        if (changeLevel == "hard") {
            gridElement.classList.add("hard");
        }


        //creo la box della griglia
        const newBox = document.createElement('div');
        newBox.classList.add('square');

        //classi per i singoli box
        if (changeLevel == "medium") {
            newBox.classList.add('medium');
        }

        if (changeLevel == "hard") {
            newBox.classList.add('hard');
        }


        newBox.innerHTML = [i+1];
    

    newBox.addEventListener('click', function() {

        console.log(this);

        
        newBox.classList.toggle('active');
        
    }
    )

    gridElement.append(newBox);
}
}
)
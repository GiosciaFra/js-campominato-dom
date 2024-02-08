// Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta (se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100,
// se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe :bomba:.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
//Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// BONUS 1
// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
// BONUS 2
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.



const gridElement = document.querySelector('#grid');
const playButton = document.querySelector('#play');
const levelElement = document.querySelector('#level');


//  cambio livello

let changeLevel = levelElement.value;

console.log(changeLevel);

levelElement.addEventListener('change',
    function () {

        changeLevel = levelElement.value;
        console.log('livello', changeLevel);
    }
)

playButton.addEventListener('click', function () {


    // rimozione griglie (partite precedenti) con 'remove'

    gridElement.classList.remove('medium');

    gridElement.classList.remove('hard');


    while (gridElement.firstChild) {
        gridElement.removeChild(gridElement.firstChild);
    }

    //  generazione array di bombe
    const bombPositions = generateBombPositions(changeLevel);

    // console.log("play");

    let gridLevel;

    if (changeLevel == "medium") {
        gridLevel = 81;
    } else if (changeLevel === "hard") {
        gridLevel = 49;
    } else {
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

        newBox.innerHTML = [i + 1];


        newBox.addEventListener('click', function () {

            // console.log(this);
            newBox.classList.add('active');


            // gestiamo il click sulla bomba
            const boxIndex = parseInt(this.innerHTML);

            if (bombPositions.includes(boxIndex)) {

                alert('Hai cliccato su una bomba! Game Over.');

            
            }

        });

        gridElement.append(newBox);
    }
});


// funzione per generare array di bombe
function generateBombPositions(changeLevel) {
    const bombPositions = [];

    let maxNumber;

    if (changeLevel === 'hard') {
        maxNumber = 49;

    } if  (changeLevel === 'medium') {
            maxNumber = 81;
    } if (changeLevel === 'easy') {
        maxNumber = 100;
    }

    while (bombPositions.length < 16) {
        const randomPosition = Math.floor(Math.random() * maxNumber) + 1;

        // if affinchè non ci siano duplicati
        if (!bombPositions.includes(randomPosition)) {
            bombPositions.push(randomPosition);
        }
    }
    console.log('Posizioni delle bombe:', bombPositions);

    return bombPositions;
}





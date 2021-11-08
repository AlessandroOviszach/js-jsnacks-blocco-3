// Snack 1
// 1. Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
// - Codice giocatore
// - Nome
// - Cognome
// - Età
// - Media punti fatti per partita
// - Percentuale di successo per tiri da 3 punti
// 2. Generare tramite delle funzioni le statistiche di gioco, secondo queste regole:
// - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
// - la media punti fatti per partita deve essere compresa tra 0 e 50
// - la percentuale di successo per tiri da 3 punti deve essere compresa tra 0 e 100
// 3. Stampare Nome, cognome, età e codice giocatore.
// 4. Creare un array di 10 giocatori di basket, con le regole sopra indicate
// 5. Creare un nuovo array con i giocatori che hanno una media di punti superiore a 35 e la percentuale di successo per i tiri da 3 punti superiore all’80%.

// create player object
const player = {
    player_code : '',
    name : 'Player_name',
    surname : 'Player_surname',
    age : 30,
    game_points_average : '',
    percentage_three_points : 5,
}

// FUNCTIONS
// player code generation
function player_code_geration() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          numbers = '0123456789';
    let letter_part = '',
    numbers_part = '',
    code = '';

    // generation of 3 letters
    for ( let i = 0; i < 3; i++ ) {
        // generazione random di 3 lettere 
        letter_part += characters.charAt(Math.floor(Math.random() * characters.length));
        // generazione random di 3 numeri
        numbers_part += numbers.charAt(Math.floor(Math.random() * numbers.length));

        // concatenazione delle variabili precedenti per la creazione del codice
        code = letter_part + numbers_part;
    }
    return code;
}
console.log( player_code_geration() );

// game point average generation
function game_average() {
    const average = Math.floor( Math.random(0) * 50 );
    return average
}
console.log( game_average() );
// percentage three points generation
function percentage_three_points_generation() {
    const random_number = Math.floor( Math.random(0) * 100 );
    const percentage = (100 * random_number) / 100;
    return String( percentage + '%' );
}
console.log( percentage_three_points_generation() );


// game statistics generation













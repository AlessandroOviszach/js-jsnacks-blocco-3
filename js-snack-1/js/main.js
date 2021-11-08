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
    player_code : player_code_generation(),
    name : 'Player_name',
    surname : 'Player_surname',
    age : 30,
    game_points_average : game_average(),
    percentage_three_points : percentage_three_points_generation(),
}

// FUNCTIONS
// player code generation - punto 1
function player_code_generation() {

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
          numbers = '0123456789';
    let letter_part = '',
        numbers_part = '';

    // generation of 3 letters
    for ( let i = 0; i < 3; i++ ) {
        // generazione random di 3 lettere 
        letter_part += characters.charAt(Math.floor(Math.random() * characters.length));
        // generazione random di 3 numeri
        numbers_part += numbers.charAt(Math.floor(Math.random() * numbers.length));

        // concatenazione delle variabili precedenti per la creazione del codice
        player_code = letter_part + numbers_part;
    }
    return player_code;
}
// game point average generation - punto 2
function game_average() {
    const average = Math.floor( Math.random(0) * 50 );
    return average;
}
// percentage three points generation - punto 3
function percentage_three_points_generation() {
    const random_number = Math.floor( Math.random(0) * 100 );
    const percentage = (100 * random_number) / 100;
    return String( percentage + '%' );
}
// player data printing
function player_data_printing() {
    // destrutturazione dell'oggetto 'player ed estrazione dati'
    const {player_code, name, surname, age} = player;
    return {player_code, name, surname, age};
}


// creazione dell'array di 10 giocatori
const players = [
    {
        player_code : player_code_generation(),
        name : 'Player_name_1',
        surname : 'Player_surname_1',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_2',
        surname : 'Player_surname_2',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_3',
        surname : 'Player_surname_3',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_4',
        surname : 'Player_surname_4',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_5',
        surname : 'Player_surname_5',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_6',
        surname : 'Player_surname_6',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_7',
        surname : 'Player_surname_7',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_8',
        surname : 'Player_surname_8',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_9',
        surname : 'Player_surname_9',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
    {
        player_code : player_code_generation(),
        name : 'Player_name_10',
        surname : 'Player_surname_10',
        age : 30,
        game_points_average : game_average(),
        percentage_three_points : percentage_three_points_generation(),
    },
]



const player1 = {
    player_code : player_code_generation(),
    name : 'Player_name',
    surname : 'Player_surname',
    age : 30,
    game_points_average : game_average(),
    percentage_three_points : percentage_three_points_generation(),
}









// console log delle funzioni
console.log( player_code_generation() );
console.log( game_average() );
console.log( percentage_three_points_generation() );
console.log( player_data_printing() );












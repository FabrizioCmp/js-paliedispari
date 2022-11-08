/******************** PALINDROMA SECTION ********************/

// dichiarazione variabili
const parolaInputEl = document.querySelector(".parola_input");
const btnPalindromaEl = document.querySelector(".btn_palindroma");
const outputSection = document.querySelector(".output_section");
let check = false;



btnPalindromaEl.addEventListener("click", isPalindroma);

/**
 * Calcola se la parola è palindroma e stampa il risultato nell'html( class="output_section")
 */
function isPalindroma() {
    const parola = parolaInputEl.value;
    const parolaReverse = parola.split("").reverse().join("");
    if (parola === "") {
        outputSection.innerHTML = "Non hai inserito alcuna parola"
    } else {

        if (parolaReverse === parola) {
            check = true;
        }
        if (check) {
            outputSection.innerHTML = `La parola inserita è un palindromo <span style="color:green;">&check;</span> `;
            check = false;
        } else {
            outputSection.innerHTML = "La parola inserita non è un palindromo <span>&#10060;</span> "
        }
        console.log(parola);
    }
};


/******************** PARIeDISPARI SECTION ********************/
// dichiarazione variabili
const btnPlay = document.querySelector(".btn_play");
const cpuNumberEl = document.querySelector(".cpu_number");
const playerNumber = document.querySelector(".player_number");
const gameResultEl = document.querySelector(".game_result");
let radioChecked = "";


btnPlay.addEventListener("click", function(){
    let cpuNumber ;
    let sum  ;
    let isPari ;

    for (i=1 ; i<=2; i++){
        let currentRadio = document.getElementById(`r${i}`);
        if(currentRadio.checked){
            radioChecked = currentRadio.value;
        }
    }

    cpuNumber = random1_5();
    cpuNumberEl.innerHTML = cpuNumber;
    sum = sum2(cpuNumber, parseInt(playerNumber.value));
    isPari = sum % 2;

    console.log(playerNumber.value);

    gameResultEl.classList.add("display_result");

    if (radioChecked === "" || playerNumber.value === "" ) {
        gameResultEl.innerHTML = `effetua una scelta( pari o dispari) ed inserisci un numero intero tra 1 e 5`; 
    }else if((radioChecked === "pari" && isPari === 0) || (radioChecked === "dispari" && isPari != 0)){
        gameResultEl.innerHTML = `la somma è uguale a ${sum} ed è ${radioChecked}, hai vinto!  &#128526`;
    }else {
        gameResultEl.innerHTML = `la somma è uguale a ${sum} e non è ${radioChecked}, hai perso  &#128546`;
    }
})

// dichiaraione funzioni 
/**
 * calcola numero casuale intero compreso tra 1 e 5
 */
function random1_5(){
    return Math.floor(Math.random() * 5 + 1);
}

/**
 * caclola la somma di due numeri
 */
function sum2(num1 , num2){
    return num1 + num2;
}
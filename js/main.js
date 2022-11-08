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

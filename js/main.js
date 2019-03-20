// JSdoc - serve para classificar as variáveis, ajudando na espera das tipagens 
// (como no C e Java onde precisa tipar um dado. ex: int, char, double, boolean, etc );
/** @param {number} total and @param {number} val - exemplo de como usar o JSdoc */


// Sanitização e espera para rodar o JS para melhor performance na web
/** @param {event} DOMContentLoaded - Dispara o evento ao carregar todo o DOM para só então carregar o JS, melhorando a performance e melhora na usabilidade e garantindo a usabildade esperada */

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");
});
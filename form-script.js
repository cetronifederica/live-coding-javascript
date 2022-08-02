// prendo dal document l'elemento form
const form = document.getElementById('form');

// alla form aggangio il listener per il submit
form.addEventListener('submit', addItem);


// funzione che aggiunge un elemento alla lista con valore dell'input
function addItem(event) {
    // intercetto l'evento e prevengo il comportamento di default
    event.preventDefault();
console.log('funzione addItem');
}

// dati necessari per calcolo

// km = 0.21;

// sconto 20% minorenni;
// sconto 40% over 65;
//let = quanti anni hai;
// let= quanti km vuoi fare?

// calcoli
const tariffaKm = 0.21;

const discount18 = 0.2;
const discount65 = 0.4;

console.log(tariffaKm);
console.log(discount18);
console.log(discount65);

let age = 81;
// let price = (tariffaKm * distanza);


if (age < 18){

    price = price - (price * discount18);
} else if (age > 66) {
    price = price - (price * discount65);
}

const button = document.querySelector('btn');

button.addEventListener('click', function(){

    let nome = document.getElementById('nome');
    let distanza = document.getElementById('distanza');
    let age = document.getElementById('age');

    const price = (tariffaKm * distanza);

   
});
console.log(price);
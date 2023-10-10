
// dati necessari per calcolo

// km = 0.21;

// sconto 20% minorenni;
// sconto 40% over 65;
//let = quanti anni hai;
// let= quanti km vuoi fare?

const tariffaKm = 0.21;

const discount18 = 0.2;
const discount65 = 0.4;

console.log(tariffaKm);
console.log(discount18);
console.log(discount65);
let distanza = 10;
let age = 81;
let price = (tariffaKm * distanza);



if (age < 18){

    price = price - (price * discount18);
} else if (age > 66) {
    price = price - (price * discount65);
}

console.log(price);

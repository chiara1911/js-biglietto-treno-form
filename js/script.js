
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




const button = document.querySelector('.btn-success');


button.addEventListener('click', function(){

    let nome = document.getElementById('nome').value;
    
    let distanza = parseInt(document.getElementById('distanza').value);  
    let age = parseInt(document.getElementById('age').value);  
    let price = (tariffaKm * distanza);
    console.log(nome,distanza, age, price);
   
});

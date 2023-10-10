
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

    const nome = document.getElementById('nome').value;
   
    const distanza = parseInt(document.getElementById('distanza').value);  
    const age = document.getElementById('age').value;  
    let price = (tariffaKm * distanza);
    const cliente = document.getElementById('cliente');
    console.log(nome,distanza, age, price);
    let categoria = document.getElementById('categoria');
    console.log(categoria);
    if ( age === 'minorenne' ){
        price = price - (price * discount18);
        prezzo.innerHTML = price.toFixed(2) + ' euro ';
        categoria.innerHTML = 'minorenne';
        sconto.innerHTML = '20%';
        
    } else if( age === 'adulto'){       
        prezzo.innerHTML = price.toFixed(2) + ' euro ';
        categoria.innerHTML = 'adulto';
        sconto.innerHTML = 'none';

    } else {
        price = price - (price * discount65);
        prezzo.innerHTML = price.toFixed(2) + ' euro ';
        categoria.innerHTML = 'senior';
        sconto.innerHTML = '40%';
    }
    cliente.innerHTML = nome;
    km.innerHTML = distanza + 'km';
    Nome_Cognome.innerHTML = nome;

});




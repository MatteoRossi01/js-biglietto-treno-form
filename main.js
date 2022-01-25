const genera = document.getElementById('genera')

genera.addEventListener('click', 
    function() {
        const name = document.getElementById('name').value;
        console.log(name)
        const km = document.getElementById('km').value;
        console.log(km)
        const eta = document.getElementById('eta').value;
        console.log(eta)
        var CP = Math.floor(Math.random() * 10000) + 90000;
        console.log(CP);
        var carrozza = Math.floor((Math.random()*6) + 1);
        console.log(carrozza);

        const tariffa = (0.21);    // Costo tariffa
        const minorenni = (0.2); // sconto minorenni
        const over = (0.4); // sconto over 65

        let costo = km * tariffa; // tariffa prezzo pieno
        let prezzoScontato;
        let costoMinorenni = costo * minorenni; // sconto minorenni
        let costoOver = costo * over; // sconto maggiorenni

        if (document.getElementById('container-biglietto')) {
            document.getElementById('container-biglietto').setAttribute('class', 'show');
        }

        if (eta == "minorenne") {
            prezzoScontato = costo - costoMinorenni;
            document.getElementById('costo').innerHTML = prezzoScontato.toFixed(2);
            document.getElementById('offerta').innerHTML = ('Sconto per minorenni');
        } else if (eta == "over") {
            prezzoScontato = costo - costoOver;
            document.getElementById('costo').innerHTML = prezzoScontato.toFixed(2);
            document.getElementById('offerta').innerHTML = ('Sconto per pensionati');
        } else {
            document.getElementById('costo').innerHTML = costo.toFixed(2);
            document.getElementById('offerta').innerHTML = ('Tariffa standard');
        }

        document.getElementById('name-pass').innerHTML = name;
        document.getElementById('CP').innerHTML = CP;
        document.getElementById('carrozza').innerHTML = carrozza;
    }
)

const annulla = document.getElementById('annulla')

annulla.addEventListener('click', 
    function() {

        if (document.getElementById('container-biglietto')) {
            document.getElementById('container-biglietto').setAttribute('class', 'hide');
        }

        document.getElementById('name').value = '';
        document.getElementById('km').value = '';
        document.getElementById('eta').value = '';

    }
)
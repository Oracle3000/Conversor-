const moneda1 = document.getElementById("moneda-uno");
const moneda2 = document.getElementById("moneda-dos");
const cantidad1 = document.getElementById("cantidad-uno");
const cantidad2 = document.getElementById("cantidad-dos");
const cambio = document.getElementById("cambio");
const btn = document.getElementById("tasa-btn");


//Fetch
function calcular() {
    const moneda_uno = moneda1.value; 
    const moneda_dos = moneda2.value; 

    fetch(`https://api.exchangerate-api.com/v4/latest/${moneda_uno}`)
    .then(res => res.json())
    .then(data => {;
        const tasa =data.rates[moneda_dos];
        
        cambio.innerText= `1 ${moneda_uno} = ${tasa} ${moneda_dos}`;

        cantidad2.value = (cantidad1.value * tasa).toFixed(2);
    });
}

//Eventos
moneda1.addEventListener("cambios",calcular);
cantidad1.addEventListener("input",calcular);
moneda2.addEventListener("cambios",calcular);
cantidad2.addEventListener("input",calcular);

btn.addEventListener("click", ()=> {
    const temp = moneda1.value;
    moneda1.value = moneda2.value;
    moneda2.value = temp;

})
calcular();
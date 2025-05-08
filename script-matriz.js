const filas = 5;
const columnas = 24;
const contenedor = document.getElementById('matriz');
let abecedario = document.getElementById('matriz');

for (let k = 0; k < filas; k++) {
    //abecedario.push(String.fromCharCode(k));
    abecedario += String.fromCharCode(k);
}

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        const boton = document.createElement('button')
        boton.textContent = ('' + (abecedario[i + 1]) + "-" + (j + 1) + '');
        boton.onclick = () => alert('se desplego la informacion del sitio' + boton.textContent);
        contenedor.appendChild(boton);

    }
}


function llamarId() {
    let asen = document.getElementById('lang').value;
    document.getElementById('ase').innerText = asen
}
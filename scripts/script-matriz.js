const filas = 5;
const columnas = 24;
const contenedor = document.getElementById('matriz');
let abecedario = ['E', 'D', 'C', 'B', 'A'];

for (let i = 0; i < filas; i++) {
    for (let j = 0; j < columnas; j++) {
        const boton = document.createElement('button');
        boton.textContent = ('' + (abecedario[i]) + "-" + (j + 1) + '');
        boton.onclick = () => alert('se desplego la informacion del sitio ' + boton.textContent);
        contenedor.appendChild(boton);
        

    }
    
}




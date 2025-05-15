
let contador = 2; // Para numerar las filas nuevas
let matriz = [];
function agregarFila() {


    // Obtener el valor del input
    matriz[0] = document.getElementById('DatoUbi').value;
    matriz[1] = document.getElementById('DatoItem').value;
    matriz[2] = document.getElementById('DatoDesItem').value;
    matriz[3] = document.getElementById('DatoUniVenta').value;
    matriz[4] = document.getElementById('DatoUniOrden').value;
    matriz[5] = document.getElementById('DatoInvGene').value;
    matriz[6] = document.getElementById('DatoFechaVen').value;

    // Verificamos si el campo no está vacío
    if (matriz[0].trim() === "" || matriz[1].trim() === "" ||
        matriz[2].trim() === "" || matriz[3].trim() === "" ||
        matriz[4].trim() === "" || matriz[5].trim() === "" ||
        matriz[6].trim() === "") {

        alert("Por favor ingresa un texto.");
        return;

    } else {

        // Crear una nueva fila
        const nuevaFila = document.createElement('tr');

        nuevaFila.innerHTML = `<td>${contador}</td>
            <td colspan="1">${matriz[0]}</td>
            <td colspan="1">${matriz[1]}</td>
            <td colspan="1">${matriz[2]}</td>
            <td colspan="1">${matriz[3]}</td>
            <td colspan="1">${matriz[4]}</td>
            <td colspan="1">${matriz[5]}</td>
            <td colspan="1">${matriz[6]}</td>`;

        // Agregar la nueva fila a la tabla
        document.getElementById('tablaBody').appendChild(nuevaFila);

        // Limpiar el input
        document.getElementById('DatoUbi').value = '';
        document.getElementById('DatoItem').value = '';
        document.getElementById('DatoDesItem').value = '';
        document.getElementById('DatoUniVenta').value = '';
        document.getElementById('DatoUniOrden').value = '';
        document.getElementById('DatoInvGene').value = '';
        document.getElementById('DatoFechaVen').value = '';

        // Incrementar el número de fila
        contador++;

    }
}

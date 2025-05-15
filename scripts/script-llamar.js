function llamarId() {
    let seleccion = document.getElementById('lang').value;
    //validar que no este en "seleccionar"
    if (seleccion !== "seleccionar") {
        let titulo = document.getElementById('numeroEstante');
        titulo.innerText = ('Estante ' + seleccion);

    } else {
        alert("porfavor selecciona un estante valido");
    }

    console.log(seleccion);
}
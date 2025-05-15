const form = document.getElementById('DatosForm');
form.addEventListener('sumit', function(event){
    event.preventDefault();
    let DatosFormData = new FormData(form);
})
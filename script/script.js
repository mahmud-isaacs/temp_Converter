let button = document.getElementById('convert')

button.addEventListener('click', function(){
    let degreeCelsius = document.querySelector('#celsius').value
    if (degreeCelsius == ""){
        alert('Please fill out input fields!');
        return
    }

    let fahrenheit = degreeCelsius * 9/5 + 32;

    

    document.querySelector('#result').innerHTML = fahrenheit

})
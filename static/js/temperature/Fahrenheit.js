var Fahrenheit = document.getElementById('Fahrenheit');

Fahrenheit.oninput = function() {
    Fahrenheit.value = Fahrenheit.value.replace(",", ".")
    if (!isNaN(Number(Fahrenheit.value))) {
        if (Fahrenheit.value != ""){
            value = Number(Fahrenheit.value)
            document.getElementById('Celsius').value = ""
            document.getElementById('Celsius').value = ((value-32)*5/9).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Kelvin').value = ""
            document.getElementById('Kelvin').value = ((value-32)*5/9+273.15).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

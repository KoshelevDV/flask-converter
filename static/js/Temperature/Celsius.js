var Celsius = document.getElementById('Celsius');

Celsius.oninput = function() {
    Celsius.value = Celsius.value.replace(",", ".")
    if (!isNaN(Number(Celsius.value))) {
        if (Celsius.value != ""){
            value = Number(Celsius.value)
            document.getElementById('Fahrenheit').value = ""
            document.getElementById('Fahrenheit').value = (value*9/5 + parseInt(32)).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Kelvin').value = ""
            document.getElementById('Kelvin').value = (value+273.15).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

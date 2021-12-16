var Kelvin = document.getElementById('Kelvin');

Kelvin.oninput = function() {
    Kelvin.value = Kelvin.value.replace(",", ".")
    if (!isNaN(Number(Kelvin.value))) {
        if (Kelvin.value != ""){
            value = Number(Kelvin.value)
            document.getElementById('fahrenheit').value = ""
            document.getElementById('fahrenheit').value = ((value-273.15)*9/5 + parseInt(32)).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Celsius').value = ""
            document.getElementById('Celsius').value = (value-273.15).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

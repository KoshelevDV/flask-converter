var Tonn = document.getElementById('Tonn');

Tonn.oninput = function() {
    Tonn.value = Tonn.value.replace(",", ".")
    if (!isNaN(Number(Tonn.value))) {
        if (Tonn.value != ""){
            value = Number(Tonn.value)
            document.getElementById('Milligramm').value = ""
            document.getElementById('Milligramm').value = value * 1000 * 1000 * 100 * 10
            document.getElementById('Gramm').value = ""
            document.getElementById('Gramm').value = value * 1000 * 100 * 10
            document.getElementById('Kilogramm').value = ""
            document.getElementById('Kilogramm').value = value * 100 * 10
            document.getElementById('Centner').value = ""
            document.getElementById('Centner').value = value * 10
        }
    }
};

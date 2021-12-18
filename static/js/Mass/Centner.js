var Centner = document.getElementById('Centner');

Centner.oninput = function() {
    Centner.value = Centner.value.replace(",", ".")
    if (!isNaN(Number(Centner.value))) {
        if (Centner.value != ""){
            value = Number(Centner.value)
            document.getElementById('Milligramm').value = ""
            document.getElementById('Milligramm').value = value * 1000 * 1000 * 100
            document.getElementById('Gramm').value = ""
            document.getElementById('Gramm').value = value * 1000 * 100
            document.getElementById('Kilogramm').value = ""
            document.getElementById('Kilogramm').value = value * 100
            document.getElementById('Tonn').value = ""
            document.getElementById('Tonn').value = value / 10
        }
    }
};

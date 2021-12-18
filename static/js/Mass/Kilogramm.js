var Kilogramm = document.getElementById('Kilogramm');

Kilogramm.oninput = function() {
    Kilogramm.value = Kilogramm.value.replace(",", ".")
    if (!isNaN(Number(Kilogramm.value))) {
        if (Kilogramm.value != ""){
            value = Number(Kilogramm.value)
            document.getElementById('Milligramm').value = ""
            document.getElementById('Milligramm').value = value * 1000 * 1000
            document.getElementById('Gramm').value = ""
            document.getElementById('Gramm').value = value * 1000
            document.getElementById('Centner').value = ""
            document.getElementById('Centner').value = value / 100
            document.getElementById('Tonn').value = ""
            document.getElementById('Tonn').value = value / (100 * 10)
        }
    }
};

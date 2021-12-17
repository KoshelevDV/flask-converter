var Milligramm = document.getElementById('Milligramm');

Milligramm.oninput = function() {
    Milligramm.value = Milligramm.value.replace(",", ".")
    if (!isNaN(Number(Milligramm.value))) {
        if (Milligramm.value != ""){
            value = Number(Milligramm.value)
            document.getElementById('Gramm').value = ""
            document.getElementById('Gramm').value = value / 1000
            document.getElementById('Kilogramm').value = ""
            document.getElementById('Kilogramm').value = value / (1000 * 1000)
            document.getElementById('Centner').value = ""
            document.getElementById('Centner').value = value / (1000 * 1000 * 100)
            document.getElementById('Tonn').value = ""
            document.getElementById('Tonn').value = value / (1000 * 1000 * 100 * 10)
        }
    }
};

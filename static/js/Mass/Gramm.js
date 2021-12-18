var Gramm = document.getElementById('Gramm');

Gramm.oninput = function() {
    Gramm.value = Gramm.value.replace(",", ".")
    if (!isNaN(Number(Gramm.value))) {
        if (Gramm.value != ""){
            value = Number(Gramm.value)
            document.getElementById('Milligramm').value = ""
            document.getElementById('Milligramm').value = value * 1000
            document.getElementById('Kilogramm').value = ""
            document.getElementById('Kilogramm').value = value / 1000
            document.getElementById('Centner').value = ""
            document.getElementById('Centner').value = value / (1000 * 100)
            document.getElementById('Tonn').value = ""
            document.getElementById('Tonn').value = value / (1000 * 100 * 10)
        }
    }
};

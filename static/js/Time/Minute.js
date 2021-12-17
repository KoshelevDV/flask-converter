var Minute = document.getElementById('Minute');

Minute.oninput = function() {
    Minute.value = Minute.value.replace(",", ".")
    if (!isNaN(Number(Minute.value))) {
        if (Minute.value != ""){
            value = Number(Minute.value)
            document.getElementById('Millisecond').value = ""
            document.getElementById('Millisecond').value = (value * 60 * 1000).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Second').value = ""
            document.getElementById('Second').value = (value * 60).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Hour').value = ""
            document.getElementById('Hour').value =  (value / (60)).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

var Millisecond = document.getElementById('Millisecond');

Millisecond.oninput = function() {
    Second.value = Millisecond.value.replace(",", ".")
    if (!isNaN(Number(Millisecond.value))) {
        if (Millisecond.value != ""){
            value = Number(Millisecond.value)
            document.getElementById('Second').value = ""
            document.getElementById('Second').value = (value / 1000).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Minute').value = ""
            document.getElementById('Minute').value = (value / (60 * 1000) ).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Hour').value = ""
            document.getElementById('Hour').value =  (value / (60 * 60 * 1000)).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

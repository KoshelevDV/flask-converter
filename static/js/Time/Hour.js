var Hour = document.getElementById('Hour');

Hour.oninput = function() {
    Hour.value = Hour.value.replace(",", ".")
    if (!isNaN(Number(Hour.value))) {
        if (Hour.value != ""){
            value = Number(Hour.value)
            document.getElementById('Millisecond').value = ""
            document.getElementById('Millisecond').value = Number(value * 60 * 60 * 1000).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Second').value = ""
            document.getElementById('Second').value = Number(value * 60 * 60).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Minute').value = ""
            document.getElementById('Minute').value =  Number(value * 60).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

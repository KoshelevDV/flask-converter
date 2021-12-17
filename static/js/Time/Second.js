var Second = document.getElementById('Second');

Second.oninput = function() {
    Second.value = Second.value.replace(",", ".")
    if (!isNaN(Number(Second.value))) {
        if (Second.value != ""){
            value = Number(Second.value)
            document.getElementById('Millisecond').value = ""
            document.getElementById('Millisecond').value = (value * 1000).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Minute').value = ""
            document.getElementById('Minute').value = (value / 60).toFixed(3).replace(/\.0+$/,'')
            document.getElementById('Hour').value = ""
            document.getElementById('Hour').value =  (value / (60 * 60)).toFixed(3).replace(/\.0+$/,'')
        }
    }
};

function count() {
    var start = document.getElementById('txts')
    var end = document.getElementById('txte')
    var steps = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (start.value.length == 0 || end.value.length == 0 || steps.value.length == 0) {
        alert('[ERROR] It is missing data.')
    } else {
        res.innerHTML = 'Counting:'
        var s = Number(start.value)
        var e = Number(end.value)
        var p = Number(steps.value)

        if (s < e) {
            //Count up
            for (var c = s; c <= e; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
             }     
        } else {
            for (var c = s; c >= e; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
             }
        }

        res.innerHTML += `\u{1F3C1}`
    }
}
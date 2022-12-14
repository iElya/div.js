function eelya(){
    var elya = document.getElementById('elya')
    var w = document.getElementById('width').value 
    var h = document.getElementById('height').value
    var position = document.getElementById('position').value
    var border = document.getElementById('border').value
    var left = document.getElementById('left').value
    var top = document.getElementById('top').value
    var bg = document.getElementById('bg').value
    var brr = document.getElementById('brr').value
    var bc = document.getElementById('bc').value
    var bsh = document.getElementById('bsh').value
    var txt = document.getElementById('txt').value
    var fs = document.getElementById('fs').value
    var fc = document.getElementById('fc').value



    elya.style.width = w
    elya.style.height = h
    elya.style.position = position
    elya.style.border = border
    elya.style.borderColor = bc
    elya.style.left = left
    elya.style.top = top
    elya.style.backgroundColor = bg
    elya.style.borderRadius = brr
    elya.style.boxShadow = bsh
    elya.innerHTML = txt
    elya.style.fontSize = fs
    elya.style.color = fc
    

}
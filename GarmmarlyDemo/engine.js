function removePunctuation(text) {
    text = text.replace(/[\.,-\/#!£$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, ' ').replace(/  +/g, ' ')
    return text
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
function randomCapitalisation(text){
    let i, letterNumber, newText
    for (i = 0; i < (text.length / 2); i++) {
        letterNumber = Math.floor(Math.random() * text.length);
        newText = setCharAt(text, letterNumber, text[letterNumber].toUpperCase())
    }
    return newText
}

function garmmarlyRun(id, text) {
    if (!text) { document.getElementById(id).innerHTML = ""; return }
    text = removePunctuation(text)
    text = randomCapitalisation(text)
    document.getElementById(id).innerHTML = text
}
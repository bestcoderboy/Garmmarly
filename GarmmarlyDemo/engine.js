function garmmarlyRun(id, text) {
    text = removePunctuation(text)
    document.getElementById(id).innerHTML = removePunctuation(text)
}
function splitLine(text){
    textArray = text.split(' ')
    for (i = 0; i < textArray.length; i++) {
        let firstChar = textArray[i].charAt(0)
        let ra
        if (firstChar !== firstChar.toLowerCase()) {

        }
    }
}
function removePunctuation(text) {
    let newText = text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()@\+\?><\[\]\+]/g, ' ').replace(/  +/g, ' ')
    return newText
}


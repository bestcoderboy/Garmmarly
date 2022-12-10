// function removePunctuation(text) {
//     text = text.replace(/[\.#!£$%\^&\*;:{}=\-_`~()@\+\?\[\]\+]/g, ' ').replace(/  +/g, ' ')
//     return text
// }
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substring(0,index) + chr + str.substring(index+1);
}
function randomCapitalisation(text){
    let i, letterNumber, newText
    for (i = 0; i < (text.length); i++) {
        letterNumber = i
        newText = setCharAt(text, letterNumber, text[letterNumber].toUpperCase())
    }
    return newText
}
function garmmarlyRun(text) {
    if (!text) { return "" }
    // text = removePunctuation(text)
    text = randomCapitalisation(text)
    return text
}

// Replace all text.
let textTags = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, caption, span, a');
for (let i = 0, l = textTags.length; i < l; i++) {
    textTags[i].innerHTML = garmmarlyRun(textTags[i].innerHTML)
}
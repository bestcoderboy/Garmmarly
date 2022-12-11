// noinspection JSUnresolvedVariable,DuplicatedCode

// Copyright 2022 BestCoderBoy
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// ------------------------------------------------------
// Initialising
// ------------------------------------------------------
let settings = {}

// ------------------------------------------------------
// Function to remove punctuation from text using RegExp.
// ------------------------------------------------------
function removePunctuation(text) {
    // noinspection RegExpRedundantEscape,RegExpDuplicateCharacterInClass
    return text.replace(/[^\w\s]/g, ' ').replace(/  +/g, ' ');
}

// ------------------------------------------------------
// Function to randomly capitalise text.
// ------------------------------------------------------
function randomCapitalisation(text) {
    let array = text.split(""), x
    for (x = 0; x < array.length; x++) {
        let y = Math.floor(Math.random() * 2)
        if (y === 0) { array[x] = array[x].toLowerCase() }
        else { array[x] = array[x].toUpperCase() }
        text = array.join("")
    }
    return text
}

// ------------------------------------------------------
// Function to run all Garmmarly functions.
// ------------------------------------------------------
function garmmarlyRun(text, settings) {
    if (settings.punctuation) { text = removePunctuation(text) }
    if (settings.capitalisation) { text = randomCapitalisation(text) }
    return text
}

// ------------------------------------------------------
// This code finds all text on a page and Garmmarlises it.
// ------------------------------------------------------

let textTags = [...document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td, caption, span, a, strong, i, em, textarea, input')];

chrome.storage.local.get(["capitalisation", "punctuation"]).then((result) => {
    Object.assign(settings, result)
    const deepNonEmptyTextNodes = el => [...el.childNodes].flatMap(e =>
        e.nodeType === Node.TEXT_NODE && e.textContent.trim() ?
            e : deepNonEmptyTextNodes(e)
    );
    textTags.forEach(tagNode => {
        const textNodes = deepNonEmptyTextNodes(tagNode);
        textNodes.forEach(node => node.nodeValue = garmmarlyRun(node.nodeValue, settings))
    })
});

// ------------------------------------------------------
// This code checks for option changes and re-runs the code.
// ------------------------------------------------------

// noinspection JSUnusedLocalSymbols
chrome.storage.onChanged.addListener((changes, namespace) => {
    chrome.storage.local.get(["capitalisation", "punctuation"]).then((result) => {
        Object.assign(settings, result)
        const deepNonEmptyTextNodes = el => [...el.childNodes].flatMap(e =>
            e.nodeType === Node.TEXT_NODE && e.textContent.trim() ?
                e : deepNonEmptyTextNodes(e)
        );
        textTags.forEach(tagNode => {
            const textNodes = deepNonEmptyTextNodes(tagNode);
            textNodes.forEach(node => node.nodeValue = garmmarlyRun(node.nodeValue, settings))
        })
    });
});
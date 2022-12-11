// noinspection JSUnresolvedVariable

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

chrome.runtime.onInstalled.addListener(function(details){
    if (details.reason === "install"){
        chrome.storage.local.set({
            "punctuation": true,
            "capitalisation": true,
            "swappedLetters": true,
            "switchVowels": true,
            "randomLetters": true,
            "doubleWords": true,
        }).then(() => {
            console.log("init: True");
        })
    }
});

document.addEventListener('DOMContentLoaded', function() {
    // Punctuation storage + listeners
    let noPunctuation = document.getElementById("noPunctuation")
    chrome.storage.local.get(["punctuation"]).then((result) => {
        console.log(result)
        noPunctuation.checked = result["punctuation"]
    })
    noPunctuation.addEventListener("change", async () => {
        if (noPunctuation.checked) {
            chrome.storage.local.set({ "punctuation": true }).then(() => {
                console.log("punctuation = True");
            })
        } else {
            chrome.storage.local.set({ "punctuation": false }).then(() => {
                console.log("punctuation = False");
            })
        }
    })

    // Capitalisation storage + listeners
    let capitalisation = document.getElementById("capitalisation")
    chrome.storage.local.get(["capitalisation"]).then((result) => {
        console.log(result)
        capitalisation.checked = result["capitalisation"]
    })
    capitalisation.addEventListener("change", async () => {
        if (capitalisation.checked) {
            chrome.storage.local.set({ "capitalisation": true }).then(() => {
                console.log("capitalisation = True");
            })
        } else {
            chrome.storage.local.set({ "capitalisation": false }).then(() => {
                console.log("capitalisation = False");
            })
        }
    })

    // Swapped letters storage + listeners
    let swappedLetters = document.getElementById("swappedLetters")
    chrome.storage.local.get(["swappedLetters"]).then((result) => {
        console.log(result)
        swappedLetters.checked = result["swappedLetters"]
    })
    swappedLetters.addEventListener("change", async () => {
        if (swappedLetters.checked) {
            chrome.storage.local.set({ "swappedLetters": true }).then(() => {
                console.log("swappedLetters = True");
            })
        } else {
            chrome.storage.local.set({ "swappedLetters": false }).then(() => {
                console.log("swappedLetters = False");
            })
        }
    })

    // switchVowels storage + listeners
    let switchVowels = document.getElementById("switchVowels")
    chrome.storage.local.get(["switchVowels"]).then((result) => {
        console.log(result)
        switchVowels.checked = result["switchVowels"]
    })
    switchVowels.addEventListener("change", async () => {
        if (switchVowels.checked) {
            chrome.storage.local.set({ "switchVowels": true }).then(() => {
                console.log("switchVowels = True");
            })
        } else {
            chrome.storage.local.set({ "switchVowels": false }).then(() => {
                console.log("switchVowels = False");
            })
        }
    })

    // randomLetters storage + listeners
    let randomLetters = document.getElementById("randomLetters")
    chrome.storage.local.get(["randomLetters"]).then((result) => {
        console.log(result)
        randomLetters.checked = result["randomLetters"]
    })
    randomLetters.addEventListener("change", async () => {
        if (randomLetters.checked) {
            chrome.storage.local.set({ "randomLetters": true }).then(() => {
                console.log("randomLetters = True");
            })
        } else {
            chrome.storage.local.set({ "randomLetters": false }).then(() => {
                console.log("randomLetters = False");
            })
        }
    })

    // doubleWords storage + listeners
    let doubleWords = document.getElementById("doubleWords")
    chrome.storage.local.get(["doubleWords"]).then((result) => {
        console.log(result)
        doubleWords.checked = result["doubleWords"]
    })
    doubleWords.addEventListener("change", async () => {
        if (doubleWords.checked) {
            chrome.storage.local.set({ "doubleWords": true }).then(() => {
                console.log("doubleWords = True");
            })
        } else {
            chrome.storage.local.set({ "doubleWords": false }).then(() => {
                console.log("doubleWords = False");
            })
        }
    })
})
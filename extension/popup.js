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

document.addEventListener('DOMContentLoaded', function() {
    let premiumClick = document.getElementById("premiumClick")
    let premiumPopup = document.getElementById("premiumPopup")
    let premiumBack = document.getElementById("premiumBack")
    let premiumJoin = document.getElementById("premiumJoin")
    let options = document.getElementById("options")
    premiumClick.addEventListener("click", async () => {
        premiumPopup.hidden = false
        options.hidden = true
    })
    premiumBack.addEventListener("click", async () => {
        premiumPopup.hidden = true
        options.hidden = false
    })
    premiumJoin.addEventListener("click", async () => {
        let newURL = "https://garmmarly.org/preemeum";
        // noinspection JSUnresolvedVariable
        chrome.tabs.create({ url: newURL });
    })
})
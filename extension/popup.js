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
        var newURL = "https://garmmarly.org/preemeum";
        chrome.tabs.create({ url: newURL });
    })
})
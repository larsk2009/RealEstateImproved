// Onder voorbehoud
document.querySelectorAll(".homerows .row ").forEach((element) => {
    // Check if the row contains "Verhuurd"
    if(element.innerText.includes("Verhuurd")) {
        if(element.innerText.includes("Verhuurd onder voorbehoud")) {
            element.appendChild(document.createElement("div")).classList.add("voorbehoud");
        } else {
            element.appendChild(document.createElement("div")).classList.add("verhuurd");
        }

        //element.closest(".search-result-main").appendChild(document.createElement("div")).classList.add("voorbehoud-funda");
    }
});
// Onder voorbehoud
document.querySelectorAll(".label-transactie-voorbehoud").forEach((element) => {
    element.closest(".search-result-main").appendChild(document.createElement("div")).classList.add("voorbehoud");
});
function toggleDocument() {
    var documentElement = document.querySelector(".document");
    if (documentElement.style.display === "none" || documentElement.style.display === "") {
        documentElement.style.display = "block";
    } else {
        documentElement.style.display = "none";
    }
}
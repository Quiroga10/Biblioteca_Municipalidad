function toggleDescription(bookId) {
    const bookCard = document.getElementById(bookId);
    const containerDescription = bookCard.querySelector(".container-description");
    const descriptionSection = bookCard.querySelector(".description");

    descriptionSection.style.display = "none";

    if (containerDescription.style.display === "none") {
        // Mostrar contenido original
        bookCard.querySelector("img").style.display = "";
        containerDescription.style.display = "";
        descriptionSection.style.display = "none";
    } else {
        // Mostrar descripción y ocultar contenido original
        bookCard.querySelector("img").style.display = "none";
        containerDescription.style.display = "none";
        descriptionSection.style.display = "";
    }
}
// Función para inicializar el mapa
function initMap() {
    const location = { lat: -6.803707, lng: -79.838209 }; // Coordenadas de la ubicación de la institución educativa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
});

const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: "Institución Educativa Carmelo Felix Medrano 10125 - Jayanca",
});
}
export function agregarAnimalATabla(animal) {
    const animalesDiv = document.getElementById("Animales");

    const card = document.createElement("div");
    card.classList.add("card", "bg-dark", "text-white", "m-2");
    card.style.width = "200px";

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = `assets/images/${animal.img}`;
    img.alt = animal.nombre;
    img.addEventListener("click", function() {
        mostrarModal(animal);
    });

    const body = document.createElement("div");
    body.classList.add("card-body");
    const title = document.createElement("h5");
    title.classList.add("card-title");
    title.textContent = animal.nombre;

    body.appendChild(title);
    card.appendChild(img);
    card.appendChild(body);

    animalesDiv.appendChild(card);
}

export function mostrarModal(animal) {
    const modalBody = document.querySelector("#exampleModal .modal-body");
    modalBody.innerHTML = `
        <h5>Nombre: ${animal.nombre}</h5>
        <p>Edad: ${animal.edad}</p>
        <p>Comentarios: ${animal.comentarios}</p>
        <audio controls>
            <source src="assets/sounds/${animal.sonido}" type="audio/mp3">
            Tu navegador no soporta el elemento de audio.
        </audio>
    `;
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
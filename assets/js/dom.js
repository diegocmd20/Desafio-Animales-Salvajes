export function agregarAnimalATabla(animal) {
    const animalesDiv = document.getElementById("Animales");

    const card = document.createElement("div");
    card.classList.add("card", "bg-dark", "text-white", "h-25", "w-25");

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

    const footer = document.createElement("div");
    footer.classList.add("card-footer", "bg-secondary", "d-flex", "align-items-center", "justify-content-center", "py-2", "px-2");
    
    const imgFooter = document.createElement("img");
    imgFooter.src = "assets/images/../imgs/audio.svg";
    imgFooter.style.height = ("auto");
    imgFooter.style.width = ("1.5rem");
    imgFooter.alt = ("audio-icon");
    imgFooter.id = ("botonReproducir");

    imgFooter.addEventListener('click', function (){ 
        animal.reproducirSonido();
    })

    body.appendChild(title);
    card.appendChild(img);
    card.appendChild(body);
    card.appendChild(footer);
    footer.appendChild(imgFooter);

    animalesDiv.appendChild(card);
}

export function mostrarModal(animal) {
    const modalBody = document.querySelector("#exampleModal .modal-body");
    modalBody.innerHTML = `
        <img class="w-50" src="assets/images/${animal.img}" alt="${animal.nombre}"/>
        <p class="fw-semibold my-1">${animal.edad}</p>
        <h6 class="fw-bold">Comemntarios</h6>
        <p>${animal.comentarios}</p>
        `;
    const modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
}
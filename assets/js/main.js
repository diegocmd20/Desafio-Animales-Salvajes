import { Leon, Lobo, Oso, Serpiente, Aguila } from '../js/animal.js';
import { agregarAnimalATabla } from '../js/dom.js';

document.getElementById("btnRegistrar").addEventListener("click", function() {
    const nombre = document.getElementById("animal").value;
    const edad = document.getElementById("edad").value;
    const comentarios = document.getElementById("comentarios").value;
    const previewImg = document.getElementById("preview");
    let img = "";
    let sonido = "";

    if (!nombre || !edad || !comentarios) {
        alert("Por favor, complete todos los campos");
        return;
    }

    // Determinar la imagen y el sonido dependiendo del animal
    switch (nombre) {
        case "Leon":
            img = "../imgs/Leon.png"; 
            sonido = "assets/sounds/../sounds/Rugido.mp3";
            previewImg.style.backgroundImage = "url(assets/images/../imgs/Leon.png)";
            break;
        case "Lobo":
            img = "../imgs/Lobo.jpg"; 
            sonido = "assets/sounds/../sounds/Aullido.mp3"; 
            previewImg.style.backgroundImage = "url(assets/images/../imgs/Lobo.jpg)";
            break;
        case "Oso":
            img = "../imgs/Oso.jpg"; 
            sonido = "assets/sounds/../sounds/Grunido.mp3"; 
            previewImg.style.backgroundImage = "url(assets/images/../imgs/Oso.jpg)";
            break;
        case "Serpiente":
            img = "../imgs/Serpiente.jpg"; 
            sonido = "assets/sounds/../sounds/Siseo.mp3";
            previewImg.style.backgroundImage = "url(assets/images/../imgs/Serpiente.jpg)"; 
            break;
        case "Aguila":
            img = "../imgs/Aguila.png"; 
            sonido = "assets/sounds/../sounds/Chillido.mp3";
            previewImg.style.backgroundImage = "url(assets/images/../imgs/Aguila.png)";
            break;
        default:
            return;
    }

    let animal;
    switch (nombre) {
        case "Leon":
            animal = new Leon(nombre, edad, img, comentarios, sonido);
            break;
        case "Lobo":
            animal = new Lobo(nombre, edad, img, comentarios, sonido);
            break;
        case "Oso":
            animal = new Oso(nombre, edad, img, comentarios, sonido);
            break;
        case "Serpiente":
            animal = new Serpiente(nombre, edad, img, comentarios, sonido);
            break;
        case "Aguila":
            animal = new Aguila(nombre, edad, img, comentarios, sonido);
            break;
    }

    agregarAnimalATabla(animal);


    document.getElementById("animal").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("comentarios").value = "";
});
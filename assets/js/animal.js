
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }

    get img() {
        return this._img;
    }

    get comentarios() {
        return this._comentarios;
    }

    set comentarios(nuevosComentarios) {
        this._comentarios = nuevosComentarios;
    }

    get sonido() {
        return this._sonido;
    }

    reproducirSonido() {
        const audio = document.getElementById('player');
        audio.src = this.sonido;
        audio.play();
    }

    /* función para cambiar imagen de preview */
}

export class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    rugir() {
        console.log('El León está rugiendo');
        this.reproducirSonido();
    }
}

export class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    aullar() {
        console.log('El Lobo está aullando');
        this.reproducirSonido();
    }
}

export class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    grunir() {
        console.log('El Oso está gruñendo');
        this.reproducirSonido();
    }
}

export class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    sisear() {
        console.log('La Serpiente está siseando');
        this.reproducirSonido();
    }
}

export class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        super(nombre, edad, img, comentarios, sonido);
    }

    chillar() {
        console.log('El Águila está chillando');
        this.reproducirSonido();
    }
}
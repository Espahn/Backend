class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.name = nombre
        this.surname = apellido
        this.books = libros
        this.pets = mascotas
    }

    getFullName(){
        return `${this.name} ${this.surname}`
    }

    addMascota([]){}

    countMascotas(){
        return this.pets.lenth;
    }
    
    addBook({}){}

    getBookNames(){
        return this.books.filter(nombre);
    }
}

const Persona = new Usuario('Eric', 'Spahn', [{nombre: 'Percy Jackson', autor: 'Rick Riordan'}, {nombre: 'I Am Number Four', autor: 'Pittacus Lore'}], ['Perra boxer', 'Perro caniche']);
console.log(Persona.getFullName);
console.log(Persona.addMascota);
console.log(Persona.countMascotas);
console.log(Persona.addBook);
console.log(Persona.getBookNames);
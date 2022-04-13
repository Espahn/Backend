class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.name = nombre
        this.surname = apellido
        this.books = libros
        this.pets = mascotas
    }

    getFullName(){
        return `${this.name} ${this.surname}`;
    }

    addMascota(nombreMascota){
        return this.pets.push(nombreMascota);
    }

    countMascotas(){
        return this.pets.length;
    }
    
    addBook(arrayLibros){
        return this.books.push(arrayLibros);
    }

    getBookNames(){
        return this.books.map(item => item.nombre);
    }
}

const usuario = new Usuario('Eric', 'Spahn', [{nombre: 'Percy Jackson', autor: 'Rick Riordan'}, {nombre: 'I Am Number Four', autor: 'Pittacus Lore'}], ['Perra boxer', 'Perro caniche']);
console.log(usuario.getFullName());
usuario.addMascota('Perro boston terrier');
console.log(usuario.countMascotas());
usuario.addBook({nombre: 'Harry Potter', autor: 'JK Rowling'});
console.log(usuario.getBookNames());
console.log(usuario);
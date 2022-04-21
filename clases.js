const fs = require('fs')

class Carrito {
    constructor (file) {
        this.file = file       
    }
    

async leer() {
    try{
        let informacion = await fs.promises.readFile(this.file, 'utf-8')
        return JSON.parse(informacion)
    } catch (error) {
        console.log('Error', error)
    }

}

async save() {
    try {
        const agregar = await fs.promises.appendFile('./clase4.js', '{"id":4,"nombre":"Campera","precio":25000}')
        return agregar.map(item => item.id)
    }
    catch (err) {
        console.log('¡Error de lectura!',err)
    }
    
}

async getById() {
    try {
        const porID = await fs.promises.readFile('./clase4.js', 'utf-8')
        console.log(porID)
        return porID.filter(item => item.id === 1)
    }
    catch (err) {
        console.log('¡Error de lectura!',err)
    }
    
}


async getAll() {
    try{
        let informacion = await fs.promises.readFile(this.file, 'utf-8')
        return JSON.parse(informacion)
    } catch (error) {
        console.log('Error', error)
    }

}

async deleteById() {
    try {
        const borrarPorID = await fs.promises.unlink('./clase4.js/`${this.id}`')
        console.log(borrarPorID)
    }
    catch (err) {
        console.log('¡Error de lectura!',err)
    }
    
}

async deleteAll() {
    try {
        const borrarTodo = await fs.promises.unlink('./clase4.js')
        console.log(borrarTodo)
    }
    catch (err) {
        console.log('¡Error de lectura!',err)
    }
    
}

}

let contenedor = new Carrito('./productos.txt')

contenedor.leer()
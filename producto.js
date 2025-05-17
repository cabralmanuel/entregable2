let nombre = prompt ("Por favor, ingresa tu nombre");
alert ("Hola " + nombre);
let edad = prompt ("Por favor, ingresa tu edad");
alert (edad);
if (isNaN(edad)) {
    alert("Por favor ingresa una edad válida.");
} else if (edad > 18) {
    alert("¡Bienvenido a la tienda!");
} else if (edad < 18) {
    alert("Prohibido el ingreso a los menores de edad.")
}

class producto {
    constructor(Nombre, Origen, Bodega, Marca, Cepa, Año, Tipo, Volumen, Graduacion, Precio) {
        this.Nombre = Nombre;
        this.Origen = Origen;
        this.Bodega = Bodega;
        this.Marca = Marca;
        this.Cepa = Cepa;
        this.Año = Año;
        this.Tipo = Tipo;
        this.Volumen = Volumen;
        this.Graduacion = Graduacion;
        this.Precio = Precio;
    }
}

class carrito{
    constructor(){
        this.productos = [];
    }

    agregarProductos(producto){
        this.productos.push(producto);
    }

    eliminarProductos(producto){
        this.productos.pop(producto);
    }

    generarTotal(){
        let total = 0;

        for (let i = 0; i < this.productos.length; i++) {
            total = total + this.productos[i].precio;
        }
        return total;
    }

    mostrarListado() {
        for (let index = 0; index < this.productos.length; index++) {
            const producto = this.productos[index];
            console.log(`- ${producto.Nombre} - ${producto.Origen} - ${producto.Bodega} - ${producto.Marca} - ${producto.Cepa} - ${producto.Año} - ${producto.Tipo} - ${producto.Volumen} - ${producto.Graduacion} - $${producto.Precio}`);
        }
    }
}

const vino = new producto ("D.V. Catena", "Mendoza", "Catena Zapata", "D.V. Catena", "Pinot Noir", 2021, "Tinto", "750ml", "13%", 16.949);
// console.log(vino);

const vino1 = new producto ("Thibaut Delmotte", "Salta", "Familia Delmotte", "Thibaut Delmotte", "Malbec", 2024, "Tinto", "750ml", "14,5%", 14.280);
// console.log(vino1);

const vino2 = new producto ("Casa Boher", "Mendoza", "Rosell Boher", "Casa Boher", "Blend", 2025, "Rosado", "750ml", "13%", 16.486);
// console.log(vino2);

const vino3 = new producto ("Alta Vista Serenade", "Mendoza", "Alta Vista", "Single Vineyard", "Malbec", 2020, "Tinto", "750ml", "15%", 55.420);
// console.log(vino3);

const Carrito1 = new carrito();

Carrito1.agregarProductos(vino);
Carrito1.agregarProductos(vino1);
Carrito1.agregarProductos(vino2);
Carrito1.agregarProductos(vino3);

Carrito1.mostrarListado();
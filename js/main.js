// Calcular costo de envío + preciofinal

let distanciaEnvio = prompt ("Ingrese a cuantos km se encuentra de CABA")

const costoEnvio1 = 350 ;

const costoEnvio2 = 450 ;

const precioZapas = 1200 ;

const precioCampera = 1500 ;

function costoEnvio (){

    if (distanciaEnvio <= 100){
        console.log ("El costo de envio es de $" + costoEnvio1);
    } else {
        console.log ("El costo de envio es de $" + costoEnvio2);
    }   
} 

function calcularTotal (precioZapas,precioCampera,costoEnvio) {
    precioFinal = precioZapas + precioCampera + costoEnvio

    console.log ("El total de su pedido es $" + precioFinal)
}

/* Hola profe. Al borrar la funcion "costoEnvio" (dejando solo el if) funciona perfectamente, pero
entonces no se como incluirlo dentro del calculo total. */ 

// DESAFIO 2






// Array de mis productos 

const productos = ["Zapatillas Adidas","Campera Nike","Buzo Dickies","Remera Hollister","Gorra Vans","Riñonera Champion", "Buzo Red Sox","Campera The North Face"] ;

console.log (productos)

// Producto ("Campera Nike") se queda sin stock, genero nueva lista de productos descontando los productos sin stock 

productos.splice (1,1)

console.log (productos)

// Ingresan nuevos productos ("Camiseta Brasil", "Camiseta Italia") y los agregamos al array "productos"

productos.push ("Camiseta Brasil", "Camiseta Italia")

console.log (productos)







// CREANDO OBJETOS Y ARRAYS CON OBJETOS

class prenda {
    constructor (nombre,costo,precio) {
        this.nombre = nombre;
        this.costo = costo;
        this.precio = precio ;
    }   

    aumentoAutomatico () {
        this.costo = this.costo * 1.25;
        this.precio = this.precio * 1.25;
    }

}

const prendas = []

prendas.push (new prenda ("Remera River", 2200, 4500)) ;
prendas.push (new prenda ("Remera Nike", 1200, 3000));
prendas.push (new prenda ("Remera Puma", 800,200));

console.log (prendas)

// Aumento de un 25% en nuestras prendas, lo traducimos al array

for ( const prenda of prendas) {
    prenda.aumentoAutomatico ();
}


















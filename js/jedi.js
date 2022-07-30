alert("Que la fuerza siempre te acompañe")

// Un carrito de productos que suma y hace subtotales para pagar es JS

const funkoQuigon = {
    nombre:"Quigon", 
    precio: 20,
    stock: 10,
}

const funkoLuke = {
    nombre:"Luke", 
    precio: 50,
    stock: 8,
}

const funkoAhsoka = {
    nombre:"Ahsoka", 
    precio: 30,
    stock: 6,
}

let CantidadVendidaQuingon = 0;
let CantidadVendidaLuke = 0;
let CantidadVendidaAhsoka = 0;
let vendido = false;

let Quigon = document.getElementById('funkoQuin')
let Luke = document.getElementById('funkoLuke')
let Ahsoka = document.getElementById('funkoAhsoka')

let ventaQuingon = 0;
let ventaLuke = 0;
let ventaAhsoka = 0;

let ventaQuingonFinal = [];
let ventaLukeFinal = [];
let ventaAhsokaFinal = [];

Quigon.addEventListener('click', function(){
    vendido = true
    CantidadVendidaQuingon++
    let nuevoStockQuin = funkoQuigon.stock - CantidadVendidaQuingon
    if (vendido == true && nuevoStockQuin>1){
        ventaQuingon = CantidadVendidaQuingon * funkoQuigon.precio
        console.log("Cantidad vendida " + CantidadVendidaQuingon)
        console.log("Total venta Funkos Quingon = $" + ventaQuingon)
        console.log("Me quedan " + nuevoStockQuin)
        ventaQuingonFinal.push(ventaQuingon);
        } else{
            console.log("Producto agotado") 
        }
    console.log(ventaQuingonFinal)
})


Luke.addEventListener('click', function(){
    vendido = true
    CantidadVendidaLuke++
    let nuevoStockLuke = funkoLuke.stock - CantidadVendidaLuke
    if (vendido == true && nuevoStockLuke>1){
        ventaLuke = CantidadVendidaLuke * funkoLuke.precio
        console.log("Cantidad vendida " + CantidadVendidaLuke)
        console.log("Total venta Funkos Luke = $" + ventaLuke)
        console.log("Me quedan " + nuevoStockLuke)
        ventaLukeFinal.push(ventaLuke);
        } else{
            console.log("Producto agotado") 
        }
        console.log(ventaLukeFinal)
})

Ahsoka.addEventListener('click', function(){
    vendido = true
    CantidadVendidaAhsoka++
    let nuevoStockAhsoka = funkoAhsoka.stock - CantidadVendidaAhsoka
    if (vendido == true && nuevoStockAhsoka>1){
        ventaAhsoka = CantidadVendidaAhsoka * funkoAhsoka.precio
        console.log("Cantidad vendida " + CantidadVendidaAhsoka)
        console.log("Total venta Funkos Ahsoka = $" + ventaAhsoka)
        console.log("Me quedan " + nuevoStockAhsoka)
        ventaAhsokaFinal.push(ventaAhsoka);
        } else{
            console.log("Producto agotado") 
        }
        console.log(ventaAhsokaFinal)
})

// const total = ventaQuingonFinal.reduce((acc, el) => acc + el.ventaQuingon)
// console.log(total)

// for(let i=0; i < ventaQuingon.length; i++){
//     console.log(ventaQuingonFinal[i])
// }

// const total = ventaQuingonFinal.length

// console.log(total)


// La idea es totalizar lo que me da y mostrarlo pero no estoy pudiendo acceder a las variables ventaQuingonFinal, ventaLukeFinal y ventaAhsokaFinal fuera de las funciones

// let totalVenta = ventaQuingonFinal + ventaLukeFinal + ventaAhsokaFinal;
// document.getElementById('carrito').innerHTML = "Debes pagar " + totalVenta + " dolares"







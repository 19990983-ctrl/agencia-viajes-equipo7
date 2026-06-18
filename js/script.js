// Agencia de Viajes "Destino Feliz"

let agencia = "Destino Feliz";
let cliente = "Juan Perez";
let destino = "Paris";
let dias = 7;
let personas = 2; 
let precioPorDia = 120;

let costoHospedaje = dias * precioPorDia * personas;
let costoTransporte = 500 * personas;
let costoAlimentacion = 30 * dias * personas;

let subtotal = costoHospedaje + costoTransporte + costoAlimentacion;

let descuento = 0;

if (subtotal > 2000) {
    descuento = subtotal * 0.10;
}

let total = subtotal - descuento;

console.log("      AGENCIA DE VIAJES");
console.log("Agencia: " + agencia);
console.log("Cliente: " + cliente);
console.log("Destino: " + destino);
console.log("Días de viaje: " + dias);
console.log("Número de personas: " + personas);
console.log("Precio por día: $" + precioPorDia);
console.log("Costo hospedaje: $" + costoHospedaje);
console.log("Costo transporte: $" + costoTransporte);
console.log("Costo alimentación: $" + costoAlimentacion);
console.log("Subtotal: $" + subtotal);
console.log("Descuento: $" + descuento);
console.log("Total a pagar: $" + total);

let actividades = [
    "Tour por la ciudad",
    "Visita a museos",
    "Excursión guiada",
    "Cena especial",
    "Paseo cultural"
];

console.log("Actividades incluidas:");

console.log("Reserva confirmada");
console.log("Gracias por elegir Destino Feliz");
console.log("Le deseamos un excelente viaje");
console.log("Disfrute de su experiencia");
console.log("Fin del comprobantente");






function calcularViaje() {

    let cliente = document.getElementById("cliente").value;
    let destino = document.getElementById("destino").value;
    let dias = Number(document.getElementById("dias").value);
    let personas = Number(document.getElementById("personas").value);
    let precio = Number(document.getElementById("precio").value);

    if (
        cliente === "" ||
        destino === "" ||
        dias <= 0 ||
        personas <= 0 ||
        precio <= 0
    ) {

        document.getElementById("resultado").innerHTML = `
            <div class="alert alert-danger">
                Complete todos los campos correctamente.
            </div>
        `;

        return;
    }

    let hospedaje = dias * precio * personas;
    let transporte = personas * 150;
    let alimentacion = dias * personas * 30;

    let subtotal =
        hospedaje +
        transporte +
        alimentacion;

    let descuento = 0;

    if (subtotal >= 2000) {
        descuento = subtotal * 0.10;
    }

    let total = subtotal - descuento;

    let actividades = [
        "Tour por la ciudad",
        "Visita a museos",
        "Excursión guiada",
        "Cena especial",
        "Paseo cultural"
    ];

    let listaActividades = "";

    actividades.forEach(function(actividad) {
        listaActividades += `<li>${actividad}</li>`;
    });

    document.getElementById("resultado").innerHTML = `

        <h3>✈️ Comprobante de Reserva</h3>

        <hr>

        <p><strong>Agencia:</strong> Explora Tours El Salvador</p>

        <p><strong>Cliente:</strong> ${cliente}</p>

        <p><strong>Destino:</strong> ${destino}</p>

        <p><strong>Días:</strong> ${dias}</p>

        <p><strong>Personas:</strong> ${personas}</p>

        <hr>

        <p>🏨 Hospedaje: $${hospedaje.toFixed(2)}</p>

        <p>🚌 Transporte: $${transporte.toFixed(2)}</p>

        <p>🍽️ Alimentación: $${alimentacion.toFixed(2)}</p>

        <hr>

        <p>Subtotal: $${subtotal.toFixed(2)}</p>

        <p>Descuento: $${descuento.toFixed(2)}</p>

        <p class="total">
            Total a Pagar: $${total.toFixed(2)}
        </p>

        <hr>

        <h5>Actividades Incluidas</h5>

        <ul>
            ${listaActividades}
        </ul>

        <div class="alert alert-success mt-3">
            ✅ Reserva generada correctamente.
        </div>

    `;
}
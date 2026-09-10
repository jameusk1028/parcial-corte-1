import {
    calcularCostoPeso,
    calcularCostoDistancia,
    calcularSubtotal,
    aplicarDescuento,
    calcularImpuesto,
    calcularTotal
} from './funciones.js';
    const bontonCalcular = document.getElementById('calcular');
    bontonCalcular.addEventListener('click', calcularEnvio);
    function calcularEnvio() {
        //Aqui obtenemos los valores que vienen del formulario
        const nombre = document.getElementById('nombreCliente').value.trim();
        const pesoKg = parseFloat(document.getElementById('pesoKg').value);
        const distanciaKm = parseInt(document.getElementById('distanciaKm').value);
        const codigoDescuento = document.getElementById('codigoDescuento').value.trim().toUpperCase();

        const mensajeError = document.getElementById('error');
        const resultado = document.getElementById('resultado');

        mensajeError.textContent = '';
        resultado.innerHTML = '';

        //Validaciones
        if (nombre === '') {
            mensajeError.textContent = 'Por favor ingresa el nombre del cliente.';
            return;
        }
        if (isNaN(pesoKg) || pesoKg <= 0) {
            mensajeError.textContent = 'Por favor ingresa un valor valido en el peso, debe ser mayor a 0.';
            return;
        }
        if (isNaN(distanciaKm) || distanciaKm <= 0) {
            mensajeError.textContent = 'Por favor ingresa un valor valido en la distancia, debe ser mayor a 0.';
            return;
        }
        
        //Calculos
        const costoPeso = calcularCostoPeso(pesoKg);
        const costoDistancia = calcularCostoDistancia(distanciaKm);
        const subtotal = calcularSubtotal(costoPeso, costoDistancia);
        const totalConDescuento = aplicarDescuento(subtotal, codigoDescuento);
        const impuesto = calcularImpuesto(totalConDescuento);
        const total = calcularTotal(totalConDescuento, impuesto);
        //Aqui mostraremos los resultados en el HTML
        resultado.innerHTML = `
            <p> <Strong> Nombre del cliente: </strong> ${nombre}</p>
            <p> <Strong> Costo por peso: </strong> $${costoPeso.toFixed(2)}</p>
            <p> <Strong> Costo por distancia: </strong> $${costoDistancia.toFixed(2)}</p>
            <p> <Strong> Subtotal: </strong> $${subtotal.toFixed(2)}</p>
            <p> <Strong> Impuesto: </strong> $${impuesto.toFixed(2)}</p>
            <p> <Strong> Total Final: </strong> $${total.toFixed(2)}</p>
        `;
    }
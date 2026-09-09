function calcularCostoPeso(pesoKg) {
    return pesoKg * 2.0;
}

function calcularCostoDistancia(distanciaKm) {
    return distanciaKm * 0.05;
}

function calcularSubtotal(costoPeso, costoDistancia) {
    return costoPeso + costoDistancia;
}

function calcularImpuesto(totalConDescuento) {
    return totalConDescuento * 0.08;
}

function calcularTotal(totalConDescuento, impuesto) {
    return totalConDescuento + impuesto;
}

export {
    calcularCostoPeso,
    calcularCostoDistancia,
    calcularSubtotal,
    calcularImpuesto,
    calcularTotal
};
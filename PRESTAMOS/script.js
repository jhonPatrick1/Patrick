document.addEventListener("DOMContentLoaded", function() {
    
    const btnMes = document.getElementById('btnCalcular-mes');
    if (btnMes) {
        btnMes.addEventListener('click', function() {
            // Capturar valores
            const monto = parseFloat(document.getElementById('monto-mes').value);
            const interes = parseFloat(document.getElementById('interes-mes').value);
            const plazo = parseInt(document.getElementById('plazo-mes').value);
            const resultadoDiv = document.getElementById('resultado-mes');

            resultadoDiv.innerHTML = ''; 

            if (!monto || !interes || !plazo) {
                alert("Por favor, rellena todos los campos de la calculadora mensual.");
                return;
            }

            let saldoPendiente = monto;
            const capitalPorCuota = monto / plazo;
            let interesTotalAcumulado = 0;
            let cuotasHTML = ''; 

            for (let i = 1; i <= plazo; i++) {
                let interesDeCuota = saldoPendiente * (interes / 100);
                interesTotalAcumulado += interesDeCuota;
                let cuotaTotalMes = capitalPorCuota + interesDeCuota;
                saldoPendiente -= capitalPorCuota;
                
                cuotasHTML += `
                    <div class="cuota-item">
                        <p class="cuota-numero">
                            <span><strong>Cuota ${i}</strong></span>
                            <strong>S/ ${cuotaTotalMes.toFixed(2)}</strong>
                        </p>
                        <p class="cuota-desglose">
                            <span>(Capital: S/ ${capitalPorCuota.toFixed(2)} + Interés: S/ ${interesDeCuota.toFixed(2)})</span>
                        </p>
                    </div>
                `;
            }
            
            const totalAPagar = monto + interesTotalAcumulado;

            let resumenHTML = `
                <div class="resumen-tabla-horizontal">
                    <div class="resumen-columna">
                        <span>CUOTAS SIN INTERÉS</span>
                        <strong>S/ ${monto.toFixed(2)}</strong>
                    </div>
                    <div class="resumen-columna">
                        <span>INTERÉS TOTAL</span>
                        <strong>S/ ${interesTotalAcumulado.toFixed(2)}</strong>
                    </div>
                    <div class="resumen-columna total">
                        <span>TOTAL A PAGAR</span>
                        <strong>S/ ${totalAPagar.toFixed(2)}</strong>
                    </div>
                </div>
                <hr style="margin: 20px 0; border: 0; border-top: 1px solid #b3d9ff;">
            `;

            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = resumenHTML + cuotasHTML;
        });
    }

    const btnDia = document.getElementById('btnCalcular-dia');
    if (btnDia) {

        function formatearFecha(fecha) {
            const opciones = { day: 'numeric', month: 'numeric', year: 'numeric' };
            return fecha.toLocaleDateString('es-ES', opciones);
        }

        btnDia.addEventListener('click', function() {

            const fechaInicioStr = document.getElementById('fechaInicio-dia').value;
            const fechaFinStr = document.getElementById('fechaFin-dia').value;
            const monto = parseFloat(document.getElementById('monto-dia').value);
            const porcentaje = parseFloat(document.getElementById('porcentaje-dia').value);
            const resultadoDiv = document.getElementById('resultado-dia');

            if (!fechaInicioStr || !fechaFinStr || !monto || !porcentaje) {
                alert("Por favor, rellena todos los campos de la calculadora por días.");
                return;
            }

            const fechaInicio = new Date(fechaInicioStr + 'T00:00:00');
            const fechaFin = new Date(fechaFinStr + 'T00:00:00');

            if (fechaFin < fechaInicio) {
                alert("La fecha 'Hasta' debe ser igual o posterior a la fecha 'Desde'.");
                return;
            }

            const diffTiempo = fechaFin.getTime() - fechaInicio.getTime();
            const totalDias = Math.round(diffTiempo / (1000 * 60 * 60 * 24));
            const diaAPagar = new Date(fechaFin);
            diaAPagar.setDate(diaAPagar.getDate() + 1);
            const diaAPagarFormateado = formatearFecha(diaAPagar);

            const interesMensualMonto = monto * (porcentaje / 100);
            const interesDiario = interesMensualMonto / 30;
            const interesAcumulado = interesDiario * totalDias;
            const totalAPagar = monto + interesAcumulado;

            resultadoDiv.style.display = 'block';
            resultadoDiv.innerHTML = `
                <p><span>Total de Días:</span> <strong>${totalDias} días</strong></p>
                <p><span>Día de Pago:</span> <strong>${diaAPagarFormateado}</strong></p>
                <hr>
                <p><span>Interés por Día:</span> S/ ${interesDiario.toFixed(2)}</p>
                <p><span>Interés Acumulado:</span> S/ ${interesAcumulado.toFixed(2)}</p>
                <hr>
                <p><span>Préstamo:</span> S/ ${monto.toFixed(2)}</p>
                <p><span>Total a Pagar:</span> <strong>S/ ${totalAPagar.toFixed(2)}</strong></p>
            `;
        });
    }


});

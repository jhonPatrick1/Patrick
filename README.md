# 💰 Calculadora de Préstamos

Esta aplicación web es una solución diseñada tanto para la planificación financiera personal como para facilitar la labor de prestamistas independientes.

El objetivo principal es proporcionar una herramienta transparente y rápida que el prestamista puede compartir con sus clientes. Esto permite que los usuarios finales visualicen con precisión el desglose de sus cuotas, intereses y plazos antes de concretar una operación, mejorando la confianza y la claridad en el servicio.

## 🧮 Lógica de Cálculo
El sistema garantiza transparencia mediante dos algoritmos financieros estándar:

### 1. Modalidad Mensual (Método Alemán)
Aplica una **Amortización de Capital Constante**, donde el monto principal se divide equitativamente y los intereses decrecen según el saldo adeudado.

* **Fórmula de Interés:**
$$I_{cuota} = Saldo_{pendiente} \times \left(\frac{i}{100}\right)$$

* **Resultado:** Cuotas mensuales descendentes que optimizan el pago de intereses para el cliente.

### 2. Modalidad Diaria (Interés Simple)
Diseñada para créditos de corto plazo, calculando el costo proporcional por día transcurrido.

* **Fórmula de Interés Diario:**
$$I_{diario} = \frac{Monto \times (\%/100)}{30}$$

* **Automatización:** Cálculo dinámico de días mediante la diferencia de tiempos entre fechas seleccionadas.

## 🚀 Características
* **Cálculo Automático:** Calcula el saldo pendiente y las cuotas basándose en el monto, interés y plazo.
* **Validaciones:** Incluye alertas para asegurar que todos los campos sean completados correctamente antes de procesar.
* **Interfaz Dinámica:** Resultados generados en tiempo real mediante manipulación del DOM.

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura de la calculadora.
* **CSS3:** Diseño responsivo y estilos visuales.
* **JavaScript (ES6):** Lógica de cálculo y manejo de eventos.

## 📸 Despliegue
> 🔗 Link del proyecto: https://jhonpatrick1.github.io/Calculadora-de-Prestamos/PRESTAMOS/


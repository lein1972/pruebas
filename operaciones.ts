// Función para sumar dos números
const sumar = (a: number, b: number): number => {
    return a + b;
};

// Función para restar dos números
const restar = (a: number, b: number): number => {
    return a - b;
};

// Función para multiplicar
const multiplicar = (a: number, b: number): number => {
    return a * b;
};

// Función para dividir
const dividir = (a: number, b: number): number => {
    if (b === 0) {
        console.error("No se puede dividir por cero");
        return 0;
    }
    return a / b;
};

console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));

// Pruebas rápidas
console.log("Suma:", sumar(10, 5));
console.log("Resta:", restar(10, 5));
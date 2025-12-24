// Función para sumar dos números
const sumar = (a: number, b: number): number => {
   console.log("Rojo: Operación suma en curso...");
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

// Función para elevar un número a una potencia
const potencia = (base: number, exponente: number): number => {
    return Math.pow(base, exponente);
};

console.log("Potencia:", potencia(2, 3)); // Debería dar 8

console.log("Multiplicación:", multiplicar(10, 5));
console.log("División:", dividir(10, 5));

// Pruebas rápidas
console.log("La suma total es igual a:", sumar(10, 5));
console.log("RESTA A:", restar(10,5));
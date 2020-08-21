// Ejercicio 1

const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {
    if (asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada) {
        return true
    }
    else {
        return false
    }
}

console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false





// Ejercicio 2

const obtenerSensacion = (temperatura) => {
    if (temperatura < 0) {
        return `¡Está helado!`
    }
    else if (temperatura >= 0 && temperatura < 15) {
        return `¡Hace frío!`
    }
    else if (temperatura >= 15 && temperatura < 25) {
        return `Está lindo.`
    }
    else if (temperatura >= 15 && temperatura < 30) {
        return `Hace calor.`
    }
    else if (temperatura >= 30) {
        return `¡Hace mucho calor!`
    }
}

console.log(obtenerSensacion(33)) // "¡Hace mucho calor!"





// Ejercicio 3

const obtenerNota = (puntaje) => {
    if (puntaje < 6) {
        return "Desaprobado"
    }
    if (puntaje >= 6 && puntaje < 7) {
        return "Regular"
    }
    if (puntaje >= 7 && puntaje < 8) {
        return "Bueno"
    }
    if (puntaje >= 8 && puntaje < 10) {
        return "Muy bueno"
    }
    if (puntaje === 10) {
        return "Excelente"
    }
    if (puntaje < 0 || puntaje > 10) {
        return "Puntaje inválido"
    }
}

console.log(obtenerNota(7))    // "Bueno"
console.log(obtenerNota(9.6))  // "Excelente" ¿?
console.log(obtenerNota(12))   // "Puntaje inválido"





// Ejercicio 4

const jugarPiedraPapelTijera = (a, b) => {
    if (a === "tijera" && b === "tijera" || a === "piedra" && b === "piedra" || a === "papel" && b === "papel") {
        return "¡Empate!"
    }
    if (a === "tijera" && b === "papel" || a === "papel" && b === "tijera") {
        return "¡Ganó tijera!"
    }
    if (a === "papel" && b === "piedra" || a === "piedra" && b === "papel") {
        return "¡Ganó papel!"
    }
    if (a === "piedra" && b === "tijera" || a === "tijera" && b === "piedra") {
        return "¡Ganó piedra!"
    }
}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!
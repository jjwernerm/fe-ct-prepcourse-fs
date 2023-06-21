/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*4️⃣ EJERCICIO 04 4️⃣*/

// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
   // Retorna el valor de "num" elevado al cuadrado.
   // Tu código:
   let elevarAlCuadrado = Math.pow(num, 2);
   return elevarAlCuadrado;
}

elevarAlCuadrado(3);

function elevarAlCubo(num) {
   // Retorna el valor de "num" elevado al cubo.
   // Tu código:
   let elevarAlCubo = Math.pow(num, 3);
   return elevarAlCubo;
}

elevarAlCubo(2)

function elevar(num, exponent) {
   // Retorna el valor de "num" elevado al exponente "exponent".
   // Tu código:
   let elevar = Math.pow(num, exponent);
   return elevar;
}

elevar(2, 3)

function redondearNumero(num) {
   // Redondea "num" al entero más próximo y retórnalo.
   // Tu código:
   let redondearNumero = Math.round(num);
   return redondearNumero;
}

redondearNumero(1.49)

function redondearHaciaArriba(num) {
   // Redondea "num" hacia arriba y retórnalo.
   // Tu código:
   let redondearHaciaArriba = Math.ceil(num);
   return redondearHaciaArriba;
}

redondearHaciaArriba(3.27)

function numeroRandom() {
   // Genera un número al azar entre 0 y 1 y retórnalo.
   // Tu código:
   let numeroRandom = Math.random();
   return numeroRandom;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   elevarAlCuadrado,
   elevarAlCubo,
   elevar,
   redondearNumero,
   redondearHaciaArriba,
   numeroRandom,
};

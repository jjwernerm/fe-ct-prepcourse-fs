/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   primerE = array[0];
   return primerE;
}

devolverPrimerElemento([2, 4, 6, 8, 10]);

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let res = 0;
   for(i = 0; i < array.length; i++){
      res = array[i];
   }   
   return res;
}

devolverUltimoElemento([2, 4, 6, 8, 10]);

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

obtenerLargoDelArray([2, 4, 6, 8, 10]);

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   for(i = 0; i < array.length; i++){
      array[i]++;
   }   
   return array;
}

incrementarPorUno([2, 4, 6, 8, 10]);

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}
agregarItemAlFinalDelArray([2, 4, 6, 8, 10], 12);

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}
agregarItemAlComienzoDelArray([2, 4, 6, 8, 10], 12);

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   let palabrasString = palabras.join(' ');
   return palabrasString;
}

dePalabrasAFrase(['Hello', 'world!']);

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   let res = array.includes(elemento)
   return res;
}

arrayContiene([2, 4, 6, 8, 10], 7);

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let sum = arrayOfNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
   return sum;
}

agregarNumeros([2, 4, 6, 8, 10]);

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

   let suma = 0
   let promedio = 0
   for(i = 0; i < resultadosTest.length; i++){
      suma = suma + resultadosTest[i];
   }
   promedio = suma / resultadosTest.length;
   return promedio;
}

promedioResultadosTest([2, 4, 6, 8, 10]);

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numGrande = Math.max(...arrayOfNums);
   return numGrande;

   //* mismo ejercicio con for
   // let maxNumber = arrayOfNums[0];

   // for (let i = 1; i < arrayOfNums.length; i++) {
   //    if (arrayOfNums[i] > maxNumber) {
   //       maxNumber = arrayOfNums[i];
   //    }
   // }
   // return maxNumber;
}

numeroMasGrande([2, 4, 6, 8, 10]);

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   if (arguments.length === 0) {
      return 0;
   }
   let resultado = 1;
   for (let i = 0; i < arguments.length; i++) {
      resultado *= arguments[i];
   }
   return resultado;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   let count =  0;
   let cantidad = array.map( (num) => {
      if(num > 18) {
         count++;
      } return
   });
   return count;
   
}

cuentoElementos([2, 4, 6, 8, 19]);

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia > 1 && numeroDeDia < 7) {
      return 'Es dia laboral';
   } else if(numeroDeDia === 1 || numeroDeDia === 7) {
      return 'Es fin de semana';
   }
}

diaDeLaSemana(1);

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   let numEntero = num.toString();
   if (numEntero.charAt(0) === '9') {
      return true;
   } else {
      return false;
   }
}

empiezaConNueve(547)

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   return array.every(function(e) {
      return e === array[0];
   });

   //* mismo ejercicio con función flecha
   // let metodoEvery = array.every ( (e) => { 
   //    return e === array[0];
   // });
   // console.log(metodoEvery);
}

todosIguales([1, 2, 1, 1, 1])

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let arrayNew = array.filter((mes) => {
      return mes === 'Enero' || mes === 'Marzo' || mes === 'Noviembre';
   });

   if (arrayNew.length === 0) {
      return 'No se encontraron los meses pedidos';
   }

   return arrayNew;   
}

mesesDelAño(['Diciembre', 'Febrero', 'Abril', 'Junio', 'Agosto', 'Octubre', 'Enero', 'Marzo', 'Mayo', 'Julio', 'Septiembre', 'Noviembre']);

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array = [];
   for(i = 0; i <= 10; i++) {
      let multiplica = 6 * i;
      array.push(multiplica);      
   }
   return array;   
}

tablaDelSeis();

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

   let result = array.filter(i => i > 100)
   return result;
}

mayorACien([200, 0, 100, 150, 99, 101, 120, 80, 88, 199])

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let array = [];
   for (let i = 0; i < 10; i++) {
      num = num + 2;
      array.push(num);      
      if (i === num) {
         break;
      }      
   }
   if (array.length < 10) {
      return 'Se interrumpió la ejecución';
   }
   return array;   
}

breakStatement(0);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   let array = [];
   for(let i = 0; i < 10; i++) {
      if(i === 5) {
         continue;
      }
      num = num + 2
      array.push(num);      
   }
   return array;
}

continueStatement(0)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

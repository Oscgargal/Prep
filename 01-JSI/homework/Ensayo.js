// var nombre = "oscar";
// console.log (nombre);
// nombre.length;
// console.log (nombre.length);
// function suma(a, b) {
//     console.log(a + b);
// }
// suma(10, 4);
// suma(20, 5);
// suma(45, 6);
// function dividir(a, b) {
//     console.log(a/b);
// }
// dividir(14, 2);
// dividir(15, 7);
// dividir(30, 10);

// function saludar(saludo, nombre, apellido) {
//     console.log(saludo + " " + nombre + " " + apellido)
// }
// saludar("Hola", "Marhta", "Olaya")
// saludar("Que mas?", "Juan", "Olaya")

// Control de Flujo

// function permisoParaManejar(edad) {
//    if (edad >= 18) { 
//        console.log("Lo dejamos pasar");
//        return true;
//    } else {
//        console.log("Le inmovilizamos el vehiculo");
//        return false;
//    }
// }
// permisoParaManejar(19);
// permisoParaManejar(17);
// permisoParaManejar(65);

// function cumpleManeja(edad) {
//     if (edad === 18) {
//         console.log("Eres todo un adulto");
//         return "Siga por favor";
//     } else if(edad >= 18) {
//         console.log('Adelante por favor');
//         return "Mayor de edad";
//     } else {
//         console.log("No puede seguir");
//         return -1;
//     }
// }
// console.log(cumpleManeja(13));
// console.log(cumpleManeja(14));
// console.log(cumpleManeja(18));
// console.log(cumpleManeja(65));
// console.log(cumpleManeja(43));
// function elevar(num, exponent) {
//     // Devuelve el valor de "num" elevado al exponente dado en "exponent"
//     // Tu código:
//     console.log(num ** exponent)
//     return num ** exponent;
//   }
//  console.log(elevar(2, 3));
// function esPositivo(numero) {
//     //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
//     //Si el número es positivo, devolver ---> "Es positivo"
//     //Si el número es negativo, devolver ---> "Es negativo"
//     //Si el número es 0, devuelve false
//     if(numero > 0){
//       return "Es positivo";
//     }else if(numero < 0) {
//       return "Es negativo";
//     }else {
//       return false;
//     }
//   }
//   console.log(esPositivo(5));
//   console.log(esPositivo(-10));
//   console.log(esPositivo(0));
// function combinarNombres(nombre, apellido) {
//     // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
//     // Ejemplo: "Soy", "Henry" -> "Soy Henry"
//     // Tu código:
//     return nombre + " " + apellido;
//   }
// console.log(combinarNombres("maria", "juarez"));
// function retornarPerimetro(lado){
//     //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
//     // Tu código:
//     return lado * 4;
  
//   }
// console.log(retornarPerimetro(5));
// function deEuroAdolar(euro){
//     //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
//     //como parámetro un número de euros y calcule el cambio en dólares.
//     // Tu código:
//     return (euro * 1.20) + " " + "usd";
    
//   }
// console.log(deEuroAdolar(4));
// function tienenMismaLongitud(str1, str2) {
//     // Devuelve "true" si las dos strings tienen la misma longitud
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     if(str1.length === str2.length) {
//       return true;
//     }else {
//       return false;
//     }
//   }
//   console.log(tienenMismaLongitud("perro", "gato"));
//   console.log(tienenMismaLongitud("pavo", "gato"));
// function esImpar(num) {
//     // Devuelve "true" si "num" es impar
//     // De lo contrario, devuelve "false"
//     // Tu código:
//     if(num % 2 !== 0){
//       return true;
//     }else {
//       return false;
//     }
//   }
// console.log((esImpar(1)));
// console.log((esImpar(10)));
// console.log((esImpar(5)));
// console.log((esImpar(24))); 
// console.log((esImpar(31)));
//Funciones && || 
// function puedeTomar(pais, edad, genero) {
//     if(pais === "Colombia" && edad >= 18 && (genero === "F" || genero === "M")) {
//         return "Puede tomar lo que quiera";
//     }
//     if(pais === "USA" && edad >= 21 && (genero === "F" || genero === "M")) { 
//         return "Puede tomar lo que quiera";
//     }
//     if(pais === "Afganistan" && edad >= 21 &&  genero === "M") {
//         return "Puede tomar lo que quiera menos alcohol";
//     }   
// } 
// console.log(puedeTomar("USA", 14, "M"));
// console.log(puedeTomar("USA", 25, "F"));
// console.log(puedeTomar("Colombia", 18, "M"));
// console.log(puedeTomar("Colombia", 17, "M"));
// console.log(puedeTomar("Afganistan", 24, "M"));
// console.log(puedeTomar("Afganistan", 24, "F"));
function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Tu código:
    if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u" || letra === "A" || letra === "E" || letra === "I" ||letra === "O" ||letra === "U" )     {
      return "Es Vocal";
    }else if(letra.length < 2) {
      return letra;
    }else {
      return "Dato incorrecto";
    }
  
  }
  console.log(esVocal("E"));
  console.log(esVocal("a"));
  console.log(esVocal("b"));
  console.log(esVocal("e"));
  console.log(esVocal("noes"));
  console.log(esVocal(2));
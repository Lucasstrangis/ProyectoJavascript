console.log("Calculadora Comercial")
alert("Bienvenido a la Calculadora Comercial en proceso");
let ingreseNombre = prompt("Ingrese su nombre");
let ingreseApellido = prompt("Ingrese su apellido")
if (ingreseNombre == ""){
  alert("No ingresaste tu nombre");
}
else if (ingreseApellido == ""){
  alert("No ingresaste tu apellido")
}
else{
  alert("Esperemos que te encuentres bien " + ingreseNombre + " " + ingreseApellido + ", comencemos!");
}

function realizarOperacion(operacion, num1, num2) {
  switch (operacion) {
    case "sumar":
      return num1 + num2;
    case "restar":
      return num1 - num2;
    case "multiplicar":
      return num1 * num2;
    case "dividir":
      if (num2 !== 0) {
        return num1 / num2;
      } else {
        return "No se puede dividir por cero.";
      }
    default:
      return "Operación incorrecta.";
  }
}

let salir = false;

do {
  console.log("1. Sumar");
  console.log("2. Restar");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Salir");

  let opcion = parseInt(prompt("Seleccione una opción: 1. Suma || 2. Resta || 3. Multiplicación || 4. División || 5.Salir"));

  switch (opcion) {
    case 1:
    case 2:
    case 3:
    case 4:
      let num1 = parseFloat(prompt("Ingrese el primer número:"));
      let num2 = parseFloat(prompt("Ingrese el segundo número:"));
      let operacion = "";

      switch (opcion) {
        case 1:
          operacion = "sumar";
          break;
        case 2:
          operacion = "restar";
          break;
        case 3:
          operacion = "multiplicar";
          break;
        case 4:
          operacion = "dividir";
          break;
      }

      let resultado = realizarOperacion(operacion, num1, num2);
      console.log("El resultado de la operación es " + resultado)
      alert("El resultado de la operación es: " + resultado);
      break;

    case 5:
      salir = true;
      console.log("Esperamos que te haya servido nuestra ayuda, que tengas un excelente día")
      alert("Esperamos que te haya servido nuestra ayuda, que tengas un excelente día")
      break;

    default:
      console.log("Opción incorrecta. Intente nuevamente.");
      break;
  }

  console.log("----- Siguiente operación -----");
} while (!salir);













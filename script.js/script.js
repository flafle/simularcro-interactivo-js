
//En el siguiente simulacro , se piden valores de notas entre el 1 y 10 para saber en que situacion estas : NO SUFICIENTE, RECUPERATORIO, SUFICIENTE, EXCELENTE.

var nombre = prompt("Ingrese su nombre");
alert(" Hola " + nombre);

var edad = prompt("Ingrese su edad");
alert(" edad " + edad);

let nota = prompt("escriba su calificacion");
function estado (){
        
            if (nota < 3){
                alert("NO SUFICIENTE");
            }
            else if (nota < 6) {
                alert("RECUPERA");
            }
            else if (nota < 8) {
                  alert("SUFICIENTE")
            }
            else if (nota <=10) {
                alert ("EXCELENTE")
            }
            else {
                alert ("Calificacion incorrecta");
            }
           
          }
     
     estado()



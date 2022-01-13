// bienvenida y nombre de la trivia//
alert("¡¡¡Bienvenida/o  a Conoce mas de las Culturas del Perú!!!" );
//ingreso de nombre//
var name = prompt("¡¡Juega con nosotros!! Ingresa tu Nombre");
//invitacion a jugar al usuario //
var play = prompt("¿ Quieres jugar " + name + "?");

//alertas si la respuesta es si o no//
switch (play) {
  case "no":
  alert("okey:), gracias");

    break;
    case "si":
     alert("¡¡¡Jugemos!!!, Responde las preguntas ");

      break;
  default:

}

//funcion de trivia//
function check() {

  var question1 = document.trivia.question1.value;
  var question2 = document.trivia.question2.value;
  var question3 = document.trivia.question3.value;
  var question4 = document.trivia.question4.value;
  var question5 = document.trivia.question5.value;
  var question6 = document.trivia.question6.value;
  var question7 = document.trivia.question7.value;
  var question8 = document.trivia.question8.value;
  var question9 = document.trivia.question9.value;
  var question10 = document.trivia.question10.value;
  var question11 = document.trivia.question11.value;
  var question12 = document.trivia.question12.value;
  var question13 = document.trivia.question13.value;
  var question14 = document.trivia.question14.value;
  var question15 = document.trivia.question15.value; 
  var correct = 0;

   if (question1 == "Caral" ) {
     correct++;
}
     if (question2 == "Chavín, Wari, Incas.") {
       correct++;
}
       if (question3 == "Constituirse en Pan culturas.") {
         correct++;
       }
       if (question4 == "del excedente productivo.") {
        correct++;
      }
      if (question5 == " Pacopampa-Kunturwasi") {
        correct++;
      }
      if (question6 == "Huaca el Brujo") {
        correct++;
      }
      if (question7 == "Diferencias de clase.") {
        correct++;
      }
      if (question8 == "Chincha") {
        correct++;
      }
      if (question9 == "Crearon revolucionarias tecnologías hidráulicas.") {
        correct++;
      }
      if (question10 == "La Portada del Sol") {
        correct++;
      }
      if (question11 == "Xilografia") {
        correct++;
      }
      if (question12 == "Huaca Loro") {
          correct++;
      }
      if (question13 == "Wari") {
        correct++;
    }
    if (question14 == "La propiedad privada") {
      correct++;
  }

  if (question15 == "Chinchasuyo") {
    correct++;
}

     
     var messages = ["¡Excelente!", "Mas o Menos", "Necesitas hacerlo mejor"];
     var pictures = ["https://c.tenor.com/MMbwkZyuj1QAAAAM/tonton-tobi.gif", "https://c.tenor.com/QPdmHRmgxyYAAAAC/mas-o-menos-poquito.gif", "https://c.tenor.com/cXuBrBY9cTAAAAAM/animo-positivo.gif"];



     var range;

       if (correct < 16) {
         range = 2;
       }

       if (correct > 5 && correct < 10) {
         range = 1;

       }

         if (correct > 2) {
              range = 0;
            }


         
            document.getElementById('after_sumibt').style.visibility = "visible";
            document.getElementById('messages').innerHTML = messages[range];
            document.getElementById('number_correct').innerHTML = "Tienes " + correct + " correcta.";
            document.getElementById('pictures').src = pictures[range];
     }

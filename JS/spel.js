var playerHealth = 6;
var dragonHealth = 6;
var dragonAlive = true;
var playerAlive = true;
var playerPower = Math.floor(Math.random()*5);
var dragonPower = Math.floor(Math.random()*5);
var dragonAction = Math.random();

var startgame = function() {

  dragonAction = Math.random();

  /* Här bestäms vad draken gör */

  if (dragonAction < 0.51) {
    dragonAction = 'attack';
  } else {
    dragonAction = 'skydd';
  }

  if (dragonHealth <= 0) {
    dragonAlive = false;
  } else {
    dragonAlive = true;
  }

  if (playerHealth <= 0) {
    playerAlive = false;
  } else {
    playerAlive = true;
  }

  console.log("Olle valde " + dragonAction);

    if (dragonAlive && playerAlive) {

      var playerAction = prompt("Du slåss mot en stor farlig drake! Hur agerar du - Attack eller skydd?").toLowerCase()

      switch (playerAction) {

        case 'attack':

          if (dragonAlive && playerAlive) {

            if (dragonAction === 'attack') {

              playerPower = Math.floor(Math.random()*5);
              dragonPower = Math.floor(Math.random()*5);
              playerHealth -= dragonPower;
              dragonHealth -= playerPower;
              document.getElementById('dragongame').innerHTML = "Både du och draken valde att attackera! <br /> \
              Du gjorde " + playerPower + " skada på draken och den har nu " + dragonHealth + " liv kvar. <br /> \
              Draken gjorde " + dragonPower + " skada på dig och du har nu " + playerHealth + " liv kvar.";

            } else {
              document.getElementById('dragongame').innerHTML = "Du attackerade men draken skyddade sig."
            }

          }
       
        break;

        case 'skydd':

          if (dragonAction === 'attack') {

            document.getElementById('dragongame').innerHTML = "Draken attackerade men du skyddade dig!";

          } else {
            document.getElementById('dragongame').innerHTML = "Ni båda skyddade er!";

          }
        

        break;

        default:
        document.getElementById('dragongame').innerHTML = "Du valde varken attack eller skydd.";
      }
      
    } else {

      if (dragonAlive === false) {

        document.getElementById('dragongame').innerHTML = "Du dödade draken! Grattis!";

      } else {

        document.getElementById('dragongame').innerHTML = "Draken dödade dig. Nu var det slut på det roliga.";

      }

    }

}

document.getElementById('startdragon').onclick = startgame
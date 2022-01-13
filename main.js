import { Fleet } from "./fleet.js";
const motherShip = new Fleet("motherShip", 1, 100, 9, "./img/alien.png");

const fleetShip = document.querySelector(".enemy-fleet");

let shipArray = [];

const createFleet = () => {
  for (let i = 0; i < 14; i++) {
    if (i < 1) {
      fleetShip.innerHTML = motherShip.getHtml();
      shipArray.push(motherShip);
    } else if (i <= 5) {
      const defenceShip = new Fleet(
        "defenceShip",
        i + 1,
        80,
        10,
        "./img/alien33.png"
      );
      fleetShip.innerHTML += defenceShip.getHtml();
      shipArray.push(defenceShip);
    } else if (i <= 14) {
      const attackShip = new Fleet(
        "attackShip",
        i + 1,
        45,
        12,
        "./img/alien5.png"
      );
      fleetShip.innerHTML += attackShip.getHtml();
      shipArray.push(attackShip);
    }
  }
};
createFleet();

const attack = () => {
  const randomNumber = Math.floor(Math.random() * shipArray.length);
  let randomShip = shipArray[randomNumber];
  randomShip.shipLife();

  const points = document.querySelectorAll(".points");
  let pointsIndex = points[randomNumber];
  pointsIndex.innerHTML = randomShip.hitPoints;

  if (randomShip.type === "motherShip" && randomShip.hitPoints <= 1) {
    randomShip.stopPoints();
    pointsIndex.innerHTML = 0;
    alert("Game Over! MotherShip been destroyed");
    shipArray.length = 0;
  } else if (randomShip.hitPoints <= 0) {
    randomShip.stopPoints();
    pointsIndex.innerHTML = 0;
    shipArray.splice(randomNumber, 1);
    pointsIndex.parentNode.removeChild(pointsIndex);
  }
};

const message = document.querySelector(".note");

const gameEnd = () => {
  if (shipArray.length == 0 || shipArray[0].hitPoints === 1)
    return (message.innerHTML = "HEY! GAME OVER");
};

const buttonAttack = document.querySelector(".attack-btn");

buttonAttack.addEventListener("click", () => {
  attack();
  gameEnd();
  reloadGame();
});

const reloadGame = () => {
  if (gameEnd()) {
    document.location.reload(true);
    document.location.reload(false);
  }
};

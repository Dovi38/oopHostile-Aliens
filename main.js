import {Fleet} from "./fleet.js"
const motherShip = new Fleet('motherShip', 1, 100, 9, './img/alien.png', );

const fleetShip = document.querySelector('.enemy-fleet');

let shipArray = [];

const createFleet = () => {
  for(let i = 0; i < 14; i++){
    if(i <1) {
      fleetShip.innerHTML = motherShip.getHtml();
      shipArray.push(motherShip);
    } else if(i <= 5) {
      const defenceShip = new Fleet('defenceShip', i+1, 80, 10, './img/alien33.png');
      fleetShip.innerHTML += defenceShip.getHtml();
      shipArray.push(defenceShip);
    } else if( i <= 14) {
      const attackShip = new Fleet('attackShip', i+1, 45, 12, './img/alien5.png');
      fleetShip.innerHTML += attackShip.getHtml();
      shipArray.push(attackShip);
    }
  }
}
createFleet();

console.log(shipArray)

const attack = () => {
  const randomNumber = Math.floor(Math.random() * shipArray.length);
    console.log(randomNumber + ' random')
  let randomShip = shipArray[randomNumber];
      console.log(randomShip.id + ' id')
    randomShip.shipLife();
      console.log(randomShip)

const points = document.querySelectorAll('.points');
    console.log(points)
  let pointsIndex = points[randomNumber]
    pointsIndex.innerHTML = randomShip.hitPoints;
      console.log(pointsIndex)
  
  if(randomShip.type === 'motherShip' && randomShip.hitPoints <= 0) {
    randomShip.stopPoints();
    pointsIndex.innerHTML = 0; 
    shipArray.splice(randomNumber, 1)
    alert('Game Over! MotherShip been destroyed');
     
  } else  if(randomShip.hitPoints <= 0) {
    randomShip.stopPoints();
    pointsIndex.innerHTML = 0;  
      console.log(shipArray.splice(randomNumber, 1));
      console.log(pointsIndex.parentNode.removeChild(pointsIndex))
      console.log(shipArray.length + ' length of array')
      console.log(points.length)
  } 
}

const message = document.querySelector('.note');

export const gameEnd = () => {
  if(shipArray.length == 0)
  return message.innerHTML = 'HEY! GAME OVER';   
}

const buttonAttack = document.querySelector('.attack-btn');

 buttonAttack.addEventListener('click', () => {
   console.log('button clicked')
   attack();
   gameEnd();
   reloadGame();
 })
 
 export const reloadGame = () => {
   if(gameEnd()) {
    document.location.reload(true)
    document.location.reload(false);
   }   
   }  
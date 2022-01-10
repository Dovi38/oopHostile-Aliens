export class Fleet {
  constructor(type, id, hitPoints, loosePoints, image) {
    this.type = type;
    this.id = id;
    this.hitPoints = hitPoints;
    this.loosePoints = loosePoints;
    this.image = image;
  }
  shipLife() {
    return this.hitPoints -= this.loosePoints;
  }
  stopPoints() {
    return;
  }
  getHtml() {
    const shipHtml = 
    `<div class="card">
    <img src="${this.image}">
    <div>
    <p class="ship">${this.type}</p>
    <p class="points" data-id="${this.id}">${this.hitPoints}</p>
    </div>
    </div>`
    return shipHtml;
  }
}


import { SearchSource, TestWatcher } from "jest";
import {Fleet} from "../fleet.js";

describe('testing fleet class', () => {
  const prototype = new Fleet('protopyte', 55, 400, 30, './img/alien.png' );
  it('testing ship life method', () => {
    expect(prototype.shipLife(400, 30)).toBe(370) 
  })
  it('testing ship getHtml method', () => {
    expect(prototype.getHtml('./img/alien.png', 'ship', 2, 100)).toBe(`<div class="card">
    <img src="${prototype.image}">
    <div>
    <p class="ship">${prototype.type}</p>
    <p class="points" data-id="${prototype.id}">${prototype.hitPoints}</p>
    </div>
    </div>`)
  })
  it('testing stop points method', () => {
    expect(prototype.stopPoints(5)).toBe()
})
})
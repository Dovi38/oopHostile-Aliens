import { TestWatcher } from "jest";
//import {gameEnd} from "../main.js";
import {Fleet} from "../fleet.js";



describe('testing fleet class', () => {
  const prototype = new Fleet('protopyte', 55, 400, 30, './img/alien.png' );
  it('testing ship life method', () => {
    expect(prototype.shipLife(400, 30)).toBe(370)
    
  })
  it('testing ship getHtml method')
})

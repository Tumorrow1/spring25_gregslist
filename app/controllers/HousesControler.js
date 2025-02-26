import { AppState } from "../AppState.js";

export class HousesControler {
  constructor() {
    // console.log(`houses son`);
    this.drawHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    let houseCardContent = ``
    houses.forEach(house => houseCardContent += house.houseTemplate)
    const houseListingElm = document.getElementById(`houseListing`)
    houseListingElm.innerHTML = houseCardContent
  }
}
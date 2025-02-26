import { CarsController } from "./controllers/CarsController.js"
import { HousesControler } from "./controllers/HousesControler.js"

class App {
  carsController = new CarsController()

  housesControler = new HousesControler()
}

window['app'] = new App()



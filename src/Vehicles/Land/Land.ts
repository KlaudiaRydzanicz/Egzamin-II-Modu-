import { eHowToMove } from "../../Enums/eHowToMove";
import { Vehicle } from "../../Vehicle";

export abstract class Land extends Vehicle {
  howToMove(): string {
    return `I ${eHowToMove.wheelsVehicle}`;
  }
}

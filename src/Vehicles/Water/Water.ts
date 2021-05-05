import { eHowToMove } from "../../Enums/eHowToMove";
import { Vehicle } from "../../Vehicle";

export abstract class Water extends Vehicle {
  howToMove(): string {
    return `I ${eHowToMove.waterVehicle}`;
  }
}

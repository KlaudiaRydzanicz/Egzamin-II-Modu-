import { eHowToMove } from "../../Enums/eHowToMove";
import { Vehicle } from "../../Vehicle";

export abstract class Air extends Vehicle {
  howToMove(): string {
    return `I ${eHowToMove.airVehicle}`;
  }
}

import { eVehicleVoices } from "../../Enums/eVehicleVoices";
import { Land } from "./Land";

export class Car extends Land {
  vehicleVoices(): string {
    return `I do: ${eVehicleVoices.familyCar}`;
  }
}

import { eVehicleVoices } from "../../Enums/eVehicleVoices";
import { Land } from "./Land";

export class Truck extends Land {
  vehicleVoices(): string {
    return `I do: ${eVehicleVoices.truck}`;
  }
}

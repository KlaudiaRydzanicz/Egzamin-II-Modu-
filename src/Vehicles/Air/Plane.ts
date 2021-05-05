import { eVehicleVoices } from "../../Enums/eVehicleVoices";
import { Air } from "./Air";

export class Plane extends Air {
  vehicleVoices(): string {
    return `I do: ${eVehicleVoices.plane}`;
  }
}

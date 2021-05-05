import { eVehicleVoices } from "../../Enums/eVehicleVoices";
import { Water } from "./Water";

export class Motorboat extends Water {
  vehicleVoices(): string {
    return `I do: ${eVehicleVoices.motorboat}`;
  }
}

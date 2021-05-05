import vehiclesJSON from "../../vehicles.json";
import { iVehicles } from "../Interfaces/iVehicles";
import { Vehicle } from "../Vehicle";
import { Car } from "../Vehicles/Land/Car";
import { Motorboat } from "../Vehicles/Water/Motorboat";
import { Plane } from "../Vehicles/Air/Plane";
import { Truck } from "../Vehicles/Land/Truck";

export class Render {
  vehicles: Vehicle[] = [];
  display() {
    vehiclesJSON.forEach((vehicle) => this.createVehicle(vehicle));
    for (let vehicle of this.vehicles){
      console.log(vehicle.toString(), vehicle.howToMove(), vehicle.vehicleVoices());

    }
  }

  createVehicle(data: iVehicles) {
    let vehicle: Vehicle;
    switch (data.type) {
      case "car":
        vehicle = new Car(
          data.value.manufacturer,
          data.value.model,
          data.value.color
        );
        break;
      case "truck":
        vehicle = new Truck(
          data.value.manufacturer,
          data.value.model,
          data.value.color
        );
        break;
      case "Plane":
        vehicle = new Plane(
          data.value.manufacturer,
          data.value.model,
          data.value.color
        );
        break;
      case "Motorboat":
        vehicle = new Motorboat(
          data.value.manufacturer,
          data.value.model,
          data.value.color
        );
        break;
      default:
        throw new Error("There is not such a vehicle!");
    }
    this.vehicles.push(vehicle);
  }
}

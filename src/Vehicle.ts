export abstract class Vehicle {
  private _manufacturer: string;
  private _model: string;
  private _color: string;

  constructor(manufacturer: string, model: string, color: string) {
    this._manufacturer = manufacturer;
    this._model = model;
    this._color = color;
  }
  toString(): string {
    return ` Marka: ${this._manufacturer}, model: ${this._model}, color: ${this._color}`;
  }
  howToMove(): string {
    throw new Error("Method howToMove not implemented!");
  }
  vehicleVoices(): string {
    throw new Error("Method vehicleVoices not implemented");
  }
}

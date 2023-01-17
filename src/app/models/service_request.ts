import {Time} from "@angular/common";

export class Service_request {
  date: Date;
  time?: Time;
  address: string;
  animalType: string;
  providerId: number;
  petOwnerId: number;
  serviceId: number

  constructor(date: Date, address: string, animalType: string, providerId: number, petOwnerId: number, serviceId: number, time?: Time) {
    this.date = date;
    this.address = address;
    this.animalType = animalType;
    this.providerId = providerId;
    this.petOwnerId = petOwnerId;
    this.serviceId = serviceId;
    this.time = time;
  }
}

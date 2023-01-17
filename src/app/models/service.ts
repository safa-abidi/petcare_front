import {ServiceCategories} from "../enums/service_categories";
import {User} from "./user";

export class Service {
  id? : number
  category: ServiceCategories;
  title: string;
  description: string;
  price: number;
  city: string;
  userId: number;
  user?: User;

  constructor(category: ServiceCategories, title: string, description: string, price: number, city: string, userId: number) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.price = price;
    this.city = city;
    this.userId = userId;
  }
}

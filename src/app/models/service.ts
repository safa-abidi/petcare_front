import {ServiceCategories} from "../enums/service_categories";

export class Service {
  category: ServiceCategories;
  title: string;
  description: string;
  price: number;
  city: string;
  userId: number

  constructor(category: ServiceCategories, title: string, description: string, price: number, city: string, userId: number) {
    this.category = category;
    this.title = title;
    this.description = description;
    this.price = price;
    this.city = city;
    this.userId = userId;
  }
}

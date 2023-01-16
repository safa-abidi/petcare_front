export class User {
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  city: string;
  gender: string;

  constructor(firstName: string, lastName: string, email: string, breed: string, birthDate: Date, city: string, gender: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.birthDate = birthDate;
    this.city = city;
    this.gender = gender;
  }
}

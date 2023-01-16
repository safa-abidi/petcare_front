import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { UserRoleEnum } from '../utils/user-role.enum';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {

  role: UserRoleEnum = UserRoleEnum.petOwner;
  lastName: string = "lastName";
  confirm: boolean = true;
  firstName: string = "firstName"
  cities: string[] = ["Ariana",
    "Ben Arous",
    "Bizerte",
    "El Kef",
    "Gabès",
    "Gafsa",
    "Jendouba",
    "Kairouan",
    "Kasserine",
    "Kebili",
    "Le Kef",
    "Mahdia",
    "Manouba",
    "Médenine",
    "Monastir",
    "Nabeul",
    "Sfax",
    "Sidi Bouzid",
    "Siliana",
    "Sousse",
    "Tataouine",
    "Tozeur",
    "Tunis",
    "Zaghouan"]
  genders: string[] = ["female", "male"]
  constructor(private router: Router,private fb: FormBuilder, private signupService: SignupService,private toastr: ToastrService) { }


  profileForm = this.fb.group({
    role: [this.role],
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', Validators.required],
    birthDate: ['', Validators.required],
    city: ['', Validators.required],
    gender: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required],
  });

  createCompareValidator(): boolean {
    this.confirm = this.profileForm?.get('password')?.value == this.profileForm?.get('confirmPassword')?.value;

    return this.profileForm?.get('password')?.value == this.profileForm?.get('confirmPassword')?.value;
  }


  onSelectUser(user: String) {
    console.log(user);

    switch (user) {
      case "admin": this.role = UserRoleEnum.admin; break;
      case "petowner": this.role = UserRoleEnum.petOwner; break;
      case "vet": this.role = UserRoleEnum.vet; break;
      default: this.role = UserRoleEnum.admin; break;
    }
  }
  onSubmit() {

    console.log(this.profileForm.value)
    this.signupService.signup(this.profileForm.value).subscribe((response: any) => {
      this.toastr.success('Utilisateur inscrit avec succès', 'Succès', {timeOut: 700});
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 900);
    },
      (error) => {
        this.toastr.error("Utilisateur existe déjà", 'Erreur', {timeOut: 1000});
      }

    )
  }



}

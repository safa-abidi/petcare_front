import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {
  lastName:string="lastName";
  confirm:boolean= true;
  firstName:string="firstName"
  cities : string[] = ["Tunis", "Ariana"]
  genders : string[] = ["female","male"]
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email:['', Validators.required],
    birthDate:['', Validators.required],
    city:['', Validators.required],
    gender:['', Validators.required],
    password:['', Validators.required],
    confirmPassword:['',Validators.required],
   
     
  });
 
  createCompareValidator() : boolean {
      this.confirm = this.profileForm?.get('password')?.value ==this.profileForm?.get('confirmPassword')?.value;
     
      return this.profileForm?.get('password')?.value ==this.profileForm?.get('confirmPassword')?.value;
     }
  

 
  
  onSubmit(){
     console.log(this.createCompareValidator());
      console.log('Name:' + this.profileForm.get('lastName')?.value);
      console.log(this.profileForm.value);
     
    
  }

  

}

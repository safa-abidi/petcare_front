import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormBuilder, Validators } from '@angular/forms';

import {faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  email: any;
  password: any;
  errorMsg: string = '';
  emailIcon = faEnvelope;
  passwordIcon = faLock;
  constructor(private fb: FormBuilder, private loginService: LoginService, private router : Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['', Validators.required],
    });
  }

  onSubmit(){
     this.loginService.login(this.loginForm).subscribe(
      (response: any) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);

        localStorage.setItem('userId', response.id);
        localStorage.setItem('role', response.role);
        console.log(response.role)
        this.router.navigate(['/']); //go to home page
      },
      (error) => {
        console.log(error);
        this.errorMsg = "Veuillez vérifier vos identifiants"
      }
    );
 }

}

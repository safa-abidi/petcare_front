import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { faEnvelope, faLock, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { LoginService } from '../services/login.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailIcon = faEnvelope
  passwordIcon = faLock
  icon = faArrowRightToBracket

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(credentials: NgForm) {
    console.log(credentials.value.email);

    this.loginService.login(credentials).subscribe(
      (response: any) => {
        localStorage.setItem('accessToken', response.accessToken);
        localStorage.setItem('refreshToken', response.refreshToken);
        //this.router.navigate(['/']); //go to home page
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

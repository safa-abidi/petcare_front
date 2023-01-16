import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { faHeart, faUserDoctor, faScissors, faDog } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLogged: boolean = false;
  heartIcon = faHeart;
  doctorIcon = faUserDoctor;
  brushIcon = faScissors;
  dogIcon = faDog;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus(): void {
    this.isLogged = this.loginService.isLogged();
}

}

import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pageIndex : number = 0;
  isAuthenticated = false;
  role: string = ""
  addText: string = ""
  myObject: string = ""

  constructor(private router: Router, private userService: UserService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.isAuthenticated = this.loginService.isLogged()
    this.role = localStorage.getItem("role")!
    if(this.role.toLowerCase().includes("petowner")){
      this.addText="animal"
      this.myObject= "animaux"
    }
    else if(this.role.toLowerCase().includes("provider")){
      this.addText="service"
      this.myObject= "services"
    }
  }

  onAddClick(){
    if(this.role.toLowerCase().includes("petowner")){
      this.router.navigate(["pets/add"]);
    }
    else if(this.role.toLowerCase().includes("provider")){
      this.router.navigate(["services/add"]);

    }
  }

  onDeleteClick(){
    if(confirm("Voulez vous supprimer votre compte?",)) {
      this.userService.deleteUser(+localStorage.getItem('userId')!).subscribe();
    }
    this.router.navigate(['']);
  }

  onPageChange(index : number){
    this.pageIndex= index;
  }

  onMyObjectsClick(){
    if(this.role.toLowerCase().includes("petowner")){
      this.router.navigate(["pet/all"]);
    }
    else if(this.role.toLowerCase().includes("provider")){
      this.router.navigate(["my-services",localStorage.getItem("userId")!]);

    }
  }

}

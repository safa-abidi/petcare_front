import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  pageIndex : number = 0;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  onAddPetClick(){
    this.router.navigate(["pets/add"]);
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

}

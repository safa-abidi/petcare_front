import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ControlContainer, NgForm} from "@angular/forms";
import {User} from "../../models/user";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css'],
})
export class ProfileDisplayComponent implements OnInit {

  readOnly : Boolean = true;
  user : User = new User("","","","",new Date(),"","");
  date : string = "";
  error : string = "";

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserById(+localStorage.getItem('userId')!).subscribe(
      (user) => {
        this.user = user;
      })
    this.date = new Date().toISOString().split('T')[0];
  }

  modify(){
    this.readOnly = !this.readOnly
  }

  onConfirmClick(modifyUserForm : NgForm){
    this.userService.updateUser(modifyUserForm.value,+localStorage.getItem("userId")!).subscribe(
      (e)=> {
        this.error = "";
        this.readOnly = !this.readOnly

      },
      (e) => {
        this.error = "Cet email existe déja";
      }
      );
  }

}

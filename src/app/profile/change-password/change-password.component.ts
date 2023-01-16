import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  oldPassword : string = ""
  newPassword : string = ""
  newPasswordConfim : string = ""
  error : string = ""
  constructor() { }

  ngOnInit(): void {
  }

  onConfirmClick(changePasswordForm : NgForm){
    if(this.newPassword != this.newPasswordConfim){
      this.error = "Le champ de confrimation n'est pas compatible avec le nouveau mot de passe"
    }
    //TODO change pwd
  }

}

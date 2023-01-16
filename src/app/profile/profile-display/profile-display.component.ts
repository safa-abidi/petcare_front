import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrls: ['./profile-display.component.css'],
})
export class ProfileDisplayComponent implements OnInit {

  readOnly : Boolean = true;
  @Input() firstName : string = ""
  @Input() lastName : string = ""
  @Input() email : string = ""
  @Input() city : string = ""
  @Input() birthDate : string = "2-2-2222";
  @Input() sexe : string = ""

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  modify(){
    this.readOnly = !this.readOnly
  }

  onConfirmClick(){

  }

}

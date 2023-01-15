import {Component, Input, OnInit} from '@angular/core';
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-dropdown-with-icon',
  templateUrl: './dropdown-with-icon.component.html',
  styleUrls: ['./dropdown-with-icon.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class DropdownWithIconComponent implements OnInit {

  @Input() icon = faQuestion
  @Input() animals : string[] = ["Male", "Femelle"]
  @Input() placeholder : string = 'test'
  @Input() required : boolean = true
  @Input() name : string = this.placeholder

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {faQuestion} from "@fortawesome/free-solid-svg-icons";
import {ControlContainer, NgForm} from "@angular/forms";

@Component({
  selector: 'app-text-input-with-icon',
  templateUrl: './text-input-with-icon.component.html',
  styleUrls: ['./text-input-with-icon.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class TextInputWithIconComponent implements OnInit {

  @Input() icon = faQuestion
  @Input() placeholder = ""
  @Input() type = "text"
  @Input() required : boolean = true
  @Input() name : string = this.placeholder

  constructor() { }

  ngOnInit(): void {
  }

}

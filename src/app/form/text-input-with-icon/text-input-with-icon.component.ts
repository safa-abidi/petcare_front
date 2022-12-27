import {Component, Input, OnInit} from '@angular/core';
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-text-input-with-icon',
  templateUrl: './text-input-with-icon.component.html',
  styleUrls: ['./text-input-with-icon.component.css']
})
export class TextInputWithIconComponent implements OnInit {

  @Input() icon = faQuestion
  @Input() placeholder = ""
  @Input() type = "text"
  @Input() formControlName : string = 'test'
  constructor() { }

  ngOnInit(): void {
  }

}

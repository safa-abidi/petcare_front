import {Component, Input, OnInit} from '@angular/core';
import {faQuestion} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-dropdown-with-icon',
  templateUrl: './dropdown-with-icon.component.html',
  styleUrls: ['./dropdown-with-icon.component.css']
})
export class DropdownWithIconComponent implements OnInit {

  @Input() icon = faQuestion
  @Input() animals : string[] = ["Male", "Femelle"]
  @Input() placeholder : string = 'test'
  

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text = "Button"
  @Input() icon = faQuestion

  constructor() { }

  ngOnInit(): void {
  }

}

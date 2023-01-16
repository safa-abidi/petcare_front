import { Component, OnInit } from '@angular/core';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  facebookIcon = faFacebookF;
  twitterIcon = faTwitter;
  instagramIcon = faInstagram;
  linkedinIcon = faLinkedin;

  constructor() { }

  ngOnInit(): void {
  }
  date = new Date().getFullYear();

}

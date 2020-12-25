import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faGitlab,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  getDate: number;
  faFacebook = faFacebook;
  faGithub = faGithub;
  faGitlab = faGitlab;

  constructor() {}

  ngOnInit(): void {
    this.getDate = new Date().getFullYear();
    if (this.getDate === 2020) this.getDate = null;
  }
}

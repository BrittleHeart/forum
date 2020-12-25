import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  getDate: number;

  constructor() {}

  ngOnInit(): void {
    this.getDate = new Date().getFullYear();
    if (this.getDate === 2020) this.getDate = '';
  }
}

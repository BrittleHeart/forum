import { Component, OnInit } from '@angular/core';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import {
  trigger,
  state,
  animate,
  transition,
  style,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
  animations: [
    trigger('toggleNavigation', [
      state(
        'open',
        style({
          transform: 'translate(0, 0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translate(-50%, 0)',
        })
      ),
      transition('open => closed', [
        style({ transform: 'translate(-50%, 0)' }),
        style({ transform: 'translate(0, 0)' }),
        animate('1s ease-in-out'),
      ]),
      transition('closed => open', [animate('0.5s ease-in-out')]),
    ]),
  ],
})
export class TopNavbarComponent implements OnInit {
  faMenu = faHamburger;
  public isOpen: boolean = false;
  public logged: boolean = false;
  public currentUrl: string = '/';

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}
  ngDoCheck(): void {
    this.currentUrl = this.router.url;
    this.readLocalStorage('token');
  }

  /**
   * Toggles burger menu styles
   */
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  /**
   * Reading the local storage. If exists setting up logged = true
   * @param {string} key
   */
  readLocalStorage(key: string): boolean {
    if (key in localStorage) return (this.logged = true);
  }

  /**
   * Logging out the user.
   */
  async logout(): Promise<void> {
    localStorage.removeItem('token');
    await this.router.navigate(['/']);
  }
}

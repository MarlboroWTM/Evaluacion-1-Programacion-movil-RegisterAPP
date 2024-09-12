import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isMenuOpen: boolean = false;

  constructor(private menuCtrl: MenuController) {

    this.menuCtrl.isOpen('menu1').then(isOpen => this.isMenuOpen = isOpen);
    this.menuCtrl.enable(true, 'menu1');
  }

  openFirstMenu() {
    this.menuCtrl.open('menu1');
  }

  closeMenu() {
    this.menuCtrl.close('menu1').then(() => this.isMenuOpen = false);
  }

}

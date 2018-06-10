import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage({
  segment: 'ToggleTabs020101'
})
@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Tabs 1 Tab 1 Page 1</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  Tabs 1 Tab 1 Page 1
  <button ion-button (click)="nextPage()">Go to Next Page</button>
</ion-content>
  `
})
export class ToggleTabs020101 {
  constructor(public nav: NavController) {
  }

  nextPage() {
    this.nav.push('TabsOneTabOnePageTwo', { userId: '123', name: 'Andy Bernard'});
  }
}
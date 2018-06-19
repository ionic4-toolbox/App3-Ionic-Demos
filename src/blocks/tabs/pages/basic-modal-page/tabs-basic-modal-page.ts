import { Component } from '@angular/core';
import { App, IonicPage, ViewController } from '../../../../../..';

@IonicPage()
@Component({
  templateUrl: 'tabs-basic-modal-page.html'
})
export class TabsBasicModalPage {
  items: any[] = [];

  constructor(private viewCtrl: ViewController, private app: App) {
    for (var i = 1; i <= 10; i++) {
      this.items.push(i);
    }
  }

  dismiss() {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss();
  }

  appNavPop() {
    this.app.navPop();
  }
}
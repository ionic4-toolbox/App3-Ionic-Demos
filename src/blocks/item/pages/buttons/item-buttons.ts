import { Component } from '@angular/core';

@Component({
  templateUrl: 'item-buttons.html'
})
export class ItemButtons {
  testClick(ev: any) {
    console.log('CLICK!', ev.target.tagName, ev.target.textContent.trim());
  }

  testClickOutsize(ev: any) {
    console.log('CLICK OUTSIDE!', ev.target.tagName, ev.target.textContent.trim());
  }
}
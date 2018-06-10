import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../..';

@IonicPage({
  segment: 'paramOne/:paramOne/paramTwo/:paramTwo'
})
@Component({
  templateUrl: 'third-page.html'
})
export class SimpleNav03 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
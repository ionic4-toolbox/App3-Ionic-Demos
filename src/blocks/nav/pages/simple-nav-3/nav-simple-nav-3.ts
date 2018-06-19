import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from '../../../../../..';

@IonicPage(/*{segment: 'paramOne/:paramOne/paramTwo/:paramTwo'} */)
@Component({
  templateUrl: 'nav-simple-nav-3.html'
})
export class NavSimpleNav3 {

  paramOne: string;
  paramTwo: string;
  constructor(public nav: NavController, public params: NavParams) {
    this.paramOne = this.params.data.paramOne;
    this.paramTwo = this.params.data.paramTwo;
  }
}
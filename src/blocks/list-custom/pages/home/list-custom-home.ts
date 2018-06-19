import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController, NavParams }		from 'ionic-angular';

@IonicPage()
@Component({
	selector: 'page-list-custom-home',
	templateUrl: 'list-custom-home.html',
})
export class ListCustomHome {

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListCustomHome');
	}

}
import { Component }					from '@angular/core';
import { IonicPage }					from 'ionic-angular';
import { NavController, NavParams }		from 'ionic-angular';
import { ToastController } 				from 'ionic-angular';

import { DataSQLiteProvider }			from '../../provider/provider/data-sqlite';

// ------------------------------------------------------------------------------------------------
@IonicPage()
@Component({
	selector: 'page-sqlite-add',
	templateUrl: 'sqlite-add.html',
})
export class SqliteAdd {
	public db: any;

	data = { rowid: 0, date: "", type: "", description: "", amount: 0 };

	constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public database: DataSQLiteProvider,
		private toastCtrl: ToastController
	) {
			console.log('SqliteAdd::constructor')
			this.db = database;
		 }

	presentToast(msg: string, duration: any) {
		let toast = this.toastCtrl.create({
			message: msg,
			duration: duration
		});
		toast.present();
	}

	saveData() {
		this.db.saveData(this.data, this.data, this.data, this.data);
		this.navCtrl.popToRoot();
	}

}
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { ModalPage } from '../modal/modal';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  activatePrincipal() {
      this.navCtrl.parent.select(0);
  }

  showModal() {
      let modal = this.modalCtrl.create( ModalPage, {name: "Fernado", age: "30"} );

      modal.present();

      modal.onDidDismiss( params => {

          if (params) {
            console.log("data from modal:");
            console.log(params);
          }
          else {
            console.log("modal was closed without params");
          }
      });

  }

}

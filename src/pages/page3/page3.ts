import { Component } from '@angular/core';
import { NavParams, NavController } from "ionic-angular";

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
    hero:any = {};

    constructor ( private navParams: NavParams,
                  private navCtrl: NavController) {
        
        this.hero = this.navParams.get("hero");
        
    }

    goBack() {
        this.navCtrl.pop();
    }

    goToRoot() {
        this.navCtrl.popToRoot();
    }
}

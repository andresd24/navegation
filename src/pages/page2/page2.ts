import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Page3Page } from '../page3/page3';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

   page3:any = Page3Page;

  public heroes:any[] = [
    {
      name: "Magnet",
      power: "Control magnets"
    },
    {
      name: "Wolverine",
      power: "Accelerated regeneration"
    },
    {
      name: "Profesor X",
      power: "Mental powers"
    },
    {
      name: "Gambito",
      power: "Charge inanimate objects with energy"
    }
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  goToPage3( hero:any ) {

      this.navCtrl.push(Page3Page, {'hero': hero});
  }

}

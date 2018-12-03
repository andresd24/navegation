import { Component } from '@angular/core';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3Page {
    hero:any = {};

    constructor ( private navParams: NavParams) {
        
        this.hero = this.navParams.get("hero");
        
    }
}

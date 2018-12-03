import { Component } from '@angular/core';
import { IonicPage,  NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  
  name:string = "";
  age:number = 0;

  constructor(public navParams: NavParams, private viewCtrl: ViewController) {
      this.name = this.navParams.get("name");
      this.age = this.navParams.get("age");

      console.log(this.name, this.age);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  closeWithParameters() {
      let data = {
        name: "John",
        age: 18,
        coords: {
            lat: 10,
            long: -10
        }
      }

      this.viewCtrl.dismiss(data);
  }

  closeWithoutParameters() {
      this.viewCtrl.dismiss();
  }
}

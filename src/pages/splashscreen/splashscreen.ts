import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';


/*
  Generated class for the Splashscreen page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-splashscreen',
  templateUrl: 'splashscreen.html'
})
export class SplashscreenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    setTimeout(() => {
      this.navCtrl.push(HomePage)
    }, 2000);
  }

}

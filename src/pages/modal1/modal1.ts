import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AddshopPage } from '../addshop/addshop';

/**
 * Generated class for the Modal1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal1',
  templateUrl: 'modal1.html',
})
export class Modal1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal1Page');
  }
  closemod()
  {
    this.view.dismiss();
  }

  next()
{

  this.navCtrl.push(AddshopPage);
}
}

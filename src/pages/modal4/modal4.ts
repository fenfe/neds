import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AddshopPage } from '../addshop/addshop';

/**
 * Generated class for the Modal4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal4',
  templateUrl: 'modal4.html',
})
export class Modal4Page {

  constructor(public navCtrl: NavController, public navParams: NavParams,public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Modal4Page');
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

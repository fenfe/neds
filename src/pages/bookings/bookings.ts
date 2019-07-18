import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SlistProvider } from '../../providers/slist/slist';
import {ShopPage} from '../shop/shop';
import { Observable} from 'rxjs/Observable';
import {Item} from '../addshop/models/shopping-item/shopping-item.interface';
import {AddshopPage} from '../addshop/addshop';
import "rxjs/add/operator/map";
import { EditshopPage } from '../editshop/editshop';
import {ModalPage} from '../modal/modal';
import { HomePage } from '../home/home';
/**
 * Generated class for the BookingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bookings',
  templateUrl: 'bookings.html',
})
export class BookingsPage {



  shoppingList$:Observable<Item[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public shopping:SlistProvider,public alertCtrl:AlertController) {

    this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes=>{
      return changes.map(c=>({key:c.payload.key,...c.payload.val(),}));
    });
    if(this.shopping.com>0)
    {
      this.shopping.com =0;
    const alert = this.alertCtrl.create({
      message: 'Your Booking was successful',
      buttons: ['OK']
    });

     alert.present();
  }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookingsPage');
  }

  delete(item)
  {
  

  this.shopping.data =item;
  this.shopping.removeItem(item);

  }

  home()
  {
    this.navCtrl.push(HomePage);
  }

}

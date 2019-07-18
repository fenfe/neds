import { Component } from '@angular/core';
import { NavController, IonicPage, NavParams,ModalController } from 'ionic-angular';
import {ShopPage} from '../shop/shop';
import { SlistProvider } from '../../providers/slist/slist';
import { Observable} from 'rxjs/Observable';
import {Item} from '../addshop/models/shopping-item/shopping-item.interface';
import {AddshopPage} from '../addshop/addshop';
import "rxjs/add/operator/map";
import { EditshopPage } from '../editshop/editshop';
import {ModalPage} from '../modal/modal';
import { BookingsPage } from '../bookings/bookings';
import { Modal1Page } from '../modal1/modal1';
import { Modal2Page } from '../modal2/modal2';
import { Modal3Page } from '../modal3/modal3';
import { Modal4Page } from '../modal4/modal4';
import { Modal5Page } from '../modal5/modal5';
import { RegPage } from '../reg/reg';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  shoppingList$:Observable<Item[]>;

  constructor(public navCtrl: NavController,private shopping:SlistProvider,private nav:NavParams,public modal:ModalController) {

this.shoppingList$ = this.shopping.getShoppingList().snapshotChanges().map(changes=>{
  return changes.map(c=>({key:c.payload.key,...c.payload.val(),}));
});
 console.log(this.shoppingList$) 

  }



editshop(item)
{
  this.shopping.data =item;
  this.navCtrl.push(EditshopPage);
}

showmodal()
{
const mymodal = this.modal.create(ModalPage);
mymodal.present();

}

bookingsp()
{
  this.navCtrl.push(BookingsPage);
}

showmodal1()
{
const mymodal = this.modal.create(Modal1Page);
mymodal.present();


}

showmodal2()
{
const mymodal = this.modal.create(Modal2Page);
mymodal.present();

}

showmodal3()
{
const mymodal = this.modal.create(Modal3Page);
mymodal.present();

}

showmodal4()
{
const mymodal = this.modal.create(Modal4Page);
mymodal.present();

}

showmodal5()
{
const mymodal = this.modal.create(Modal5Page);
mymodal.present();

}


sign()
{
  this.navCtrl.push(RegPage);
}
}

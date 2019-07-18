import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,ToastOptions } from 'ionic-angular';
import { SlistProvider } from '../../providers/slist/slist';
import {Item} from '../addshop/models/shopping-item/shopping-item.interface';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editshop',
  templateUrl: 'editshop.html',
})
export class EditshopPage {
stuff = [];
cho = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public shopping:SlistProvider,public toast:ToastController) {
 
  }

  showToast()
  {
  this.toast.create()  
  }
  

item:Item;
  ionViewDidLoad() {
    
    this.stuff.push(this.shopping.data);
    this.item=this.stuff[0];
    //this.item =this.stuff[0];
   // console.log(this.item)
  }
edit()
{
  
this.item = this.stuff[0];
this.shopping.editItem(this.item);
 console.log(this.item)

 this.toastOptions ={
  message: 'Booking was successfully deleted!',
  duration:3000
}

const toast =this.toast.create(this.toastOptions).present();
 this.navCtrl.push(HomePage);
}

toastOptions:ToastOptions;
delete()
{
  this.shopping.removeItem(this.item);
 
    
 this.toastOptions ={
   message: 'Booking was successfully updated!',
   duration:3000
 }

const toast =this.toast.create(this.toastOptions).present();
  this.navCtrl.push(HomePage);
  
  }
}


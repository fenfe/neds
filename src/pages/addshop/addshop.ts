import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import {Item} from '../addshop/models/shopping-item/shopping-item.interface';
import { AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {SlistProvider} from '../../providers/slist/slist';
import { DonePage } from '../done/done';
import {HomePage} from '../home/home';
import { BookingsPage } from '../bookings/bookings';
import { ThrowStmt } from '@angular/compiler';
//import { DonePage } from '../done/done';
/**
 * Generated class for the AddshopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addshop',
  templateUrl: 'addshop.html',
})
export class AddshopPage {
//shoppingItem ={} as ShoppingItem;
item: Item = {
  name:"",
  surname:"",
  email:"",
  phone:0,
  adults:0,
  children:0,
  roomtype:"Room-Type",
  checkin:"",
  checkout:"",
  total:0

}
message ="Would you like to proceed?";
  constructor(public toastCtrl:ToastController,public navCtrl: NavController, public navParams: NavParams,private shopping:SlistProvider,public alertCtrl:AlertController) {
  this.shopping.com=this.shopping.com+1;
  }
x1;x2;day;year;month;
day2;month2;
date =new Date();
date2 =new Date();
  addItem(Item:Item)
  {

if(this.item.surname=="")
  {
    const toast =  this.toastCtrl.create({
      message: 'ERROR! \n Enter your surname',
      duration: 3000
    });
    toast.present();
  }
else

   if(this.item.name=="")
   {
    const toast =  this.toastCtrl.create({
      message: 'ERROR! \n Enter your name.',
      duration: 3000
    });
    toast.present();
   } else
    if(this.item.checkin =="" || this.item.checkout =="")
    {
      const toast =  this.toastCtrl.create({
        message: 'ERROR! \n Select a check-in or check-out date',
        duration: 3000
      });
      toast.present();
    } else
    if(this.item.roomtype=="Single")
    {
    let cprice = 1500;
    let aprice = 1000;
  
    this.month =this.item.checkin.charAt(5)+this.item.checkin.charAt(6);
    this.day =this.item.checkin.charAt(8)+this.item.checkin.charAt(9);

    this.month2 =this.item.checkout.charAt(5)+this.item.checkout.charAt(6);
    this.day2 =this.item.checkout.charAt(8)+this.item.checkout.charAt(9);
    
    console.log(parseFloat(this.day2)-parseFloat(this.day))

    if(parseFloat(this.month2)-parseFloat(this.month)<0 || parseFloat(this.day2)-parseFloat(this.day)<=0 &&this.month ==this.month2)
    {
      const toast =  this.toastCtrl.create({
        message: 'ERROR! \n Select a future date',
        duration: 3000
      });
      toast.present();
    
    }
  else{
    if(parseFloat(this.month2)-parseFloat(this.month)==0)
    {
      
      
      this.item.total= this.item.adults*aprice+this.item.children*cprice;
    
    
    
    
      const confirm = this.alertCtrl.create({
        title: 'Would you like to proceed?',
        message: "Total amount :R"+this.item.total.toString(),
        buttons: [
          {
            text: 'Decline',
            handler: () => {
             this.navCtrl.push(HomePage);
            }
          },
          {
            text: 'Proceed',
            handler: () => {
              this.shopping.addItem(Item).then(ref=>{
                console.log(ref.key)
                
                this.navCtrl.setRoot(BookingsPage,{key:ref.key});
              });
            }
          }
        ]
      });
      confirm.present();
    
    
    }

    else if( this.day>this.day2 && this.month2>this.month) {

      this.x1 = (-1)*(parseFloat(this.day2)-parseFloat(this.day));
  this.x1 =this.day-this.x1;
      this.item.total= this.x1*this.item.adults*aprice+this.x1*this.item.children*cprice;

      
      const confirm = this.alertCtrl.create({
        title: 'Would you like to proceed?',
        message: "Total amount :R"+this.item.total.toString(),
        buttons: [
          {
            text: 'Decline',
            handler: () => {
             this.navCtrl.push(HomePage);
            }
          },
          {
            text: 'Proceed',
            handler: () => {
              this.shopping.addItem(Item).then(ref=>{
                console.log(ref.key)
                
                this.navCtrl.setRoot(BookingsPage,{key:ref.key});
              });
            }
          }
        ]
      });
      confirm.present();
    



      console.log("clicked =",this.item.total)
    }
    
  }


    }
else 
  if(this.item.roomtype=="King")
  {
  let cprice = 2500;
  let aprice = 2850;

  this.month =this.item.checkin.charAt(5)+this.item.checkin.charAt(6);
  this.day =this.item.checkin.charAt(8)+this.item.checkin.charAt(9);

  this.month2 =this.item.checkout.charAt(5)+this.item.checkout.charAt(6);
  this.day2 =this.item.checkout.charAt(8)+this.item.checkout.charAt(9);
  
  console.log(parseFloat(this.day2)-parseFloat(this.day))

  if(parseFloat(this.month2)-parseFloat(this.month)<0 || parseFloat(this.day2)-parseFloat(this.day)<=0 &&this.month ==this.month2)
  {
    const toast =  this.toastCtrl.create({
      message: 'ERROR! \n Select a future date',
      duration: 3000
    });
    toast.present();
  
  }
else{
  if(parseFloat(this.month2)-parseFloat(this.month)==0)
  {
    
    
    this.item.total= this.item.adults*aprice+this.item.children*cprice;
  
  
  
  
    const confirm = this.alertCtrl.create({
      title: 'Would you like to proceed?',
      message: "Total amount :R"+this.item.total.toString(),
      buttons: [
        {
          text: 'Decline',
          handler: () => {
           this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            this.shopping.addItem(Item).then(ref=>{
              console.log(ref.key)
              
              this.navCtrl.setRoot(BookingsPage,{key:ref.key});
            });
          }
        }
      ]
    });
    confirm.present();
  
  
  }

  else if( this.day>this.day2 && this.month2>this.month) {

    this.x1 = (-1)*(parseFloat(this.day2)-parseFloat(this.day));
this.x1 =this.day-this.x1;
    this.item.total= this.x1*this.item.adults*aprice+this.x1*this.item.children*cprice;

    
    const confirm = this.alertCtrl.create({
      title: 'Would you like to proceed?',
      message: "Total amount :R"+this.item.total.toString(),
      buttons: [
        {
          text: 'Decline',
          handler: () => {
           this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            this.shopping.addItem(Item).then(ref=>{
              console.log(ref.key)
              
              this.navCtrl.setRoot(BookingsPage,{key:ref.key});
            });
          }
        }
      ]
    });
    confirm.present();
  



    console.log("clicked =",this.item.total)
  }
  
}

  }
else
if(this.item.roomtype=="Double")
{
let cprice = 3000;
let aprice = 3500;

this.month =this.item.checkin.charAt(5)+this.item.checkin.charAt(6);
this.day =this.item.checkin.charAt(8)+this.item.checkin.charAt(9);

this.month2 =this.item.checkout.charAt(5)+this.item.checkout.charAt(6);
this.day2 =this.item.checkout.charAt(8)+this.item.checkout.charAt(9);

console.log(parseFloat(this.day2)-parseFloat(this.day))

if(parseFloat(this.month2)-parseFloat(this.month)<0 || parseFloat(this.day2)-parseFloat(this.day)<=0 &&this.month ==this.month2)
{
  const toast =  this.toastCtrl.create({
    message: 'ERROR! \n Select a future date',
    duration: 3000
  });
  toast.present();

}
else{
if(parseFloat(this.month2)-parseFloat(this.month)==0)
{
  
  
  this.item.total= this.item.adults*aprice+this.item.children*cprice;




  const confirm = this.alertCtrl.create({
    title: 'Would you like to proceed?',
    message: "Total amount :R"+this.item.total.toString(),
    buttons: [
      {
        text: 'Decline',
        handler: () => {
         this.navCtrl.push(HomePage);
        }
      },
      {
        text: 'Proceed',
        handler: () => {
          this.shopping.addItem(Item).then(ref=>{
            console.log(ref.key)
            
            this.navCtrl.setRoot(BookingsPage,{key:ref.key});
          });
        }
      }
    ]
  });
  confirm.present();


}

else if( this.day>this.day2 && this.month2>this.month) {

  this.x1 = (-1)*(parseFloat(this.day2)-parseFloat(this.day));
this.x1 =this.day-this.x1;
  this.item.total= this.x1*this.item.adults*aprice+this.x1*this.item.children*cprice;

  
  const confirm = this.alertCtrl.create({
    title: 'Would you like to proceed?',
    message: "Total amount :R"+this.item.total.toString(),
    buttons: [
      {
        text: 'Decline',
        handler: () => {
         this.navCtrl.push(HomePage);
        }
      },
      {
        text: 'Proceed',
        handler: () => {
          this.shopping.addItem(Item).then(ref=>{
            console.log(ref.key)
            
            this.navCtrl.setRoot(BookingsPage,{key:ref.key});
          });
        }
      }
    ]
  });
  confirm.present();




  console.log("clicked =",this.item.total)
}

}

}

  else  if(this.item.roomtype=="Queen")
  {
  let cprice = 3000;
  let aprice = 3800;

  this.month =this.item.checkin.charAt(5)+this.item.checkin.charAt(6);
  this.day =this.item.checkin.charAt(8)+this.item.checkin.charAt(9);

  this.month2 =this.item.checkout.charAt(5)+this.item.checkout.charAt(6);
  this.day2 =this.item.checkout.charAt(8)+this.item.checkout.charAt(9);
  
  console.log(parseFloat(this.day2)-parseFloat(this.day))

  if(parseFloat(this.month2)-parseFloat(this.month)<0 || parseFloat(this.day2)-parseFloat(this.day)<=0 &&this.month ==this.month2)
  {
    const toast =  this.toastCtrl.create({
      message: 'ERROR! \n Select a future date',
      duration: 3000
    });
    toast.present();
  
  }
else{
  if(parseFloat(this.month2)-parseFloat(this.month)==0)
  {
    
    
    this.item.total= this.item.adults*aprice+this.item.children*cprice;
  
  
  
  
    const confirm = this.alertCtrl.create({
      title: 'Would you like to proceed?',
      message: "Total amount :R"+this.item.total.toString(),
      buttons: [
        {
          text: 'Decline',
          handler: () => {
           this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            this.shopping.addItem(Item).then(ref=>{
              console.log(ref.key)
              
              this.navCtrl.setRoot(BookingsPage,{key:ref.key});
            });
          }
        }
      ]
    });
    confirm.present();
  
  
  }

  else if( this.day>this.day2 && this.month2>this.month) {

    this.x1 = (-1)*(parseFloat(this.day2)-parseFloat(this.day));
this.x1 =this.day-this.x1;
    this.item.total= this.x1*this.item.adults*aprice+this.x1*this.item.children*cprice;

    
    const confirm = this.alertCtrl.create({
      title: 'Would you like to proceed?',
      message: "Total amount :R"+this.item.total.toString(),
      buttons: [
        {
          text: 'Decline',
          handler: () => {
           this.navCtrl.push(HomePage);
          }
        },
        {
          text: 'Proceed',
          handler: () => {
            this.shopping.addItem(Item).then(ref=>{
              console.log(ref.key)
              
              this.navCtrl.setRoot(BookingsPage,{key:ref.key});
            });
          }
        }
      ]
    });
    confirm.present();
  



    console.log("clicked =",this.item.total)
  }
  
}

  }
  else
  {
    const toast =  this.toastCtrl.create({
      message: 'ERROR! \n Select a room type',
      duration: 3000
    });
    toast.present();


  } 
}

}

  




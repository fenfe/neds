import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User} from '../reg/user';
import * as firebase from 'firebase'
import { LoginPage } from '../login/login';
//require('firebase/auth')
/**
 * Generated class for the RegPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reg',
  templateUrl: 'reg.html',
})
export class RegPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegPage');
  }

user:User =
{
  email :"",
password :""
}

fun(user:User)
{
console.log(user)
firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then(result => {
  console.log(result.user.uid);
  this.navCtrl.push(LoginPage)
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


}
}

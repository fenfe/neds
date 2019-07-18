import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CREDENTIALS } from './credentials';
import {ShopPage} from '../pages/shop/shop';
import {AddshopPage} from '../pages/addshop/addshop'; 
import {AngularFireDatabaseModule} from 'angularfire2/database'
import { SlistProvider } from '../providers/slist/slist';
import { DonePage } from '../pages/done/done';
import { EditshopPage } from '../pages/editshop/editshop';
import { ModalPage } from '../pages/modal/modal';
import { BookingsPage } from '../pages/bookings/bookings';
import { Modal1Page } from '../pages/modal1/modal1';
import { Modal2Page } from '../pages/modal2/modal2';
import { Modal3Page } from '../pages/modal3/modal3';
import { Modal4Page } from '../pages/modal4/modal4';
import { Modal5Page } from '../pages/modal5/modal5';
import { RegPage } from '../pages/reg/reg';
import { LoginPage } from '../pages/login/login';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ShopPage,
    AddshopPage,
    DonePage,
    EditshopPage,
    ModalPage,
    BookingsPage,
    Modal1Page,
    Modal2Page,
    Modal3Page,
    Modal4Page,
    Modal5Page,
    RegPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ShopPage,
    AddshopPage,
    DonePage,
    EditshopPage,
    ModalPage,
    BookingsPage,
    Modal1Page,
    Modal2Page,
    Modal3Page,
    Modal4Page,
    Modal5Page,
    RegPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SlistProvider
  ]
})
export class AppModule {}

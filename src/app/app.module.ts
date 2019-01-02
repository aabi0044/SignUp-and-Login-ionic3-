import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import {RegisterPage} from '../pages/register/register';
import{DashboardPage}from '../pages/dashboard/dashboard'

//---------------------------fire------------------------------------
import{AngularFirestoreModule}from '@angular/fire/firestore';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AuthProvider } from '../providers/auth/auth';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

const firebaseAuth={
  apiKey: "AIzaSyAfyUUT0UpzzRAgKLQMd78Bl6cMtTei3QA",
  authDomain: "ionic-login-75118.firebaseapp.com",
  databaseURL: "https://ionic-login-75118.firebaseio.com",
  projectId: "ionic-login-75118",
  storageBucket: "ionic-login-75118.appspot.com",
  messagingSenderId: "954055672838"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DashboardPage
    
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    HttpClientModule,

    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,RegisterPage,DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ApiProvider,

  ]
})
export class AppModule {}

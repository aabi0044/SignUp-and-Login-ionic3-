import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient, private afAuth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
   
  signUp(email,password){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
  }
logIn(email,password){
  return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}
logOut(){
  return this.afAuth.auth.signOut();
}
}

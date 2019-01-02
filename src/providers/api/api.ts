import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/firestore';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  constructor(public http: HttpClient ,private afs:AngularFirestore) {
    console.log('Hello ApiProvider Provider');
  }

  createUser(uid,data){
    return this.afs.doc('users/'+ uid).set(data);
  }
  getUser(uid){
    return this.afs.collection('users'+uid).valueChanges();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import{ApiProvider}from '../../providers/api/api';
import{AuthProvider} from '../../providers/auth/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user={
name:'',
email:'',
password:''
  }
  err
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthProvider , private api :ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  onClick(){
    this.navCtrl.push(LoginPage);
  }
  registerUser(){
this.auth.signUp(this.user.email,this.user.password).then(res=>{
  this.api.createUser(res.user.uid,this.user).then(resp=>
    {
      localStorage.setItem('uid',res.user.uid);
      localStorage.setItem('email',this.user.email);
      localStorage.setItem('name',this.user.name);
    this.navCtrl.push(LoginPage);

    })
});
  }


}

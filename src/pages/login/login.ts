import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import{AuthProvider} from '../../providers/auth/auth';
import{ApiProvider}from '../../providers/api/api';
import { DashboardPage } from '../dashboard/dashboard';
import { validateEventsArray } from '@angular/fire/firestore';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  user={
    email:'',
    password:''

}
error:boolean=false;
err
message;
  constructor( public navCtrl: NavController, public navParams: NavParams,private api :ApiProvider, private auth:AuthProvider ,public loadingCtrl: LoadingController)
   {

  

  
  }


  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');




  }
  onClick(){
    this.navCtrl.push(RegisterPage);
  }
 check(){
 
 }
  logIn(){
    
    
    
    if (this.user.password&&this.user.email!=''){

      if(this.user.password.length<6 && this.user.password.length>12){
        this.error = true;
        let errm='password must be 6 to 12 character long';
        this.message=errm;
        console.log(this.error)
      }
    //   else if(this.user.email!=" /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i"){
    // this.message='Email is badly formated'
     
      
      else if(this.user.email.length<9){
        this.message=' Length is too short '
      }


  }
  else if( this.user.password.length&&this.user.email.length==0){
    this.message='Shouldn\'t be empty ';

  }

  
    
  //   else if(this.user.password=='')
  // {
  //   this.error=true;
  //   let errm='field can not be empty';
  //   this.message=errm;
  //   console.log(this.error);
  // }
else {
  let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 2000);
try{ 
  this.auth.logIn(this.user.email,this.user.password).then(res=>{
  this.api.getUser(res.user.uid).subscribe(resp=>{
    if(resp){
      localStorage.setItem('uid',res.user.uid);
  localStorage.setItem('email',this.user.email);

this.navCtrl.push(DashboardPage);
    }
    else{
      err=>{
        this.err=err;
        setTimeout(()=>this.err ='',3000);
      }
    }
  })
}, e=>{
  console.log(e)
})
} 


catch(error){
 console.log('ok')
}
 

  }

 
  }}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LogData } from '../../interfaces/index';
import { NavController } from '@ionic/angular';
import { DatabaseService } from '../../services/database.service';
import { Database } from '@angular/fire/database';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(private auth : AuthService,private db: DatabaseService , private fb: FormBuilder, private navCtrl: NavController) { }

  form: FormGroup;
  user : LogData;

  ngOnInit() {
    if(this.auth.userLoggedData()){
      //this.navCtrl.navigateRoot('/Feed', {animated : true});
      console.log(this.auth.userLoggedData());
    }
    
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login(){
    if(!this.form.invalid) this.auth.logIn(this.user);
    else console.log('invalido');
  }

  Google(){
    this.auth.loginWithGoogle().then(() => { 
      this.db.getUsersDB().then(r => {
        //console.log(r.val());
        let bol = Object.keys(r.val()).some(f => f == this.auth.userLoggedData().uid)

        if(!bol){
          console.log('Adding new user', bol);
          this.db.saveUserDB(this.auth.userLoggedData().uid, 'true')
        }
        else{console.log('Loggin...');}

        this.navCtrl.navigateRoot('/Auth',{animated:true});
      });
    });
  }

}

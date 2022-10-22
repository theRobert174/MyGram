import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonPopover, NavController, PopoverController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string = 'MyGram';
  @Input() photo: string = '';
  @ViewChild('pop') popOver : IonPopover;

  constructor(private auth: AuthService, private navCtrl: NavController, public popCtrl: PopoverController) { }

  ngOnInit() {}

  notifications(){
  }

  logOut(){
    console.log("saliendo...");
    this.auth.logOut().then(() => {
      this.popOver.dismiss();
      this.navCtrl.navigateRoot('/MyGram',{animated:true});
    });
  }

}

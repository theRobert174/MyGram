import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.page.html',
  styleUrls: ['./profile-page.page.scss'],
})
export class ProfilePagePage implements OnInit {

  constructor(private auth : AuthService) { }

  segment: string = 'posts';
  userPhoto: string = '';

  ngOnInit() {
    this.userPhoto = this.auth.userLoggedData().photoURL;
  }

  onClick(){
    console.log("icono presionado", this.userPhoto);
    
  }

  segmentChanged(event){
    this.segment = event.detail.value;
  }

}

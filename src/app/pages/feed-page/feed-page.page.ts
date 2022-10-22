import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-feed-page',
  templateUrl: './feed-page.page.html',
  styleUrls: ['./feed-page.page.scss'],
})
export class FeedPagePage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private auth : AuthService) { }

  userPhoto : string = '';

  ngOnInit() {
    this.userPhoto = this.auth.userLoggedData().photoURL;
  }

  openPost(id: string){
    //console.log('openPost');
    this.navCtrl.navigateRoot(`Auth/MyGram/post/`+id);
    //this.router.navigate([`Auth/MyGram/post/`+id]);
  }

}
